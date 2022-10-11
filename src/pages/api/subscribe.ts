import { stripe } from "@config/stripe";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if(req.method === 'POST'){
    
    const stripeCustomer: any = await stripe.customers.create({
      email: 'id.lucas@outlook.com.br'
    })

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCustomer.id,
      payment_method_types: ['card'],
      billing_address_collection: 'required',
      line_items: [
        {price: 'price_1Lq0gyBGniSjo37yWKVX4VFc', quantity: 1}
      ],
      mode: 'payment',
      allow_promotion_codes: true,
      success_url: 'https://www.facebook.com.br',
      cancel_url: 'https://www.google.com.br'
    })

    return res.status(200).json({ sessionId: stripeCheckoutSession.id })

  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method not allowed');
  }
}