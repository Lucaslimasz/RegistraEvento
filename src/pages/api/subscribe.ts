import { fauna } from "@config/fauna";
import { stripe } from "@config/stripe";
import { query as q } from 'faunadb';
import { NextApiRequest, NextApiResponse } from "next";

interface User {
  ref: {
    id: string;
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {email} = req.body
  if(req.method === 'POST'){

    const user = await fauna.query<User>(
      q.Get(
        q.Match(
          q.Index('user_by_email'),
          q.Casefold(email)
        )
      )
    ) 
    
    const stripeCustomer: any = await stripe.customers.create({
      email
    })

    await fauna.query(
      q.Update(
        q.Ref(q.Collection('users'), user.ref.id),
        {
          data: { 
            stripe_customer_id: stripeCustomer.id,
          }
        }
      )
    )

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'auto',
      line_items: [
        {price: 'price_1Lq0gyBGniSjo37yWKVX4VFc', quantity: 1}
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: 'http://localhost:3000/sucess',
      cancel_url: 'http://localhost:3000'
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}