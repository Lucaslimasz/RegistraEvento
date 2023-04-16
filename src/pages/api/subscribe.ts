/* eslint-disable import/no-anonymous-default-export */
import { stripe } from "@config/stripe";
import { NextApiRequest, NextApiResponse } from "next";
import connect from "@config/mongo-db";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connect();
  const { name, email, whatsapp, congregation } = req.body;

  if (req.method === "POST") {
    const response = await db.collection("homensdeverdades").findOne({ email });

    if (response) {
      console.log("email já existe");
      return res.status(409).json({ error: "Email already exists" });
    }

    const user = await db
      .collection("homensdeverdades")
      .insertOne({ name, email, whatsapp, congregation });

      console.log()

    const stripeCostumer = await stripe.customers.create({
      email,
    });

    const stripeCheckoutSession = await stripe.checkout.sessions.create({
      customer: stripeCostumer.id,
      payment_method_types: ["card"],
      billing_address_collection: "auto",
      line_items: [{ price: "price_1Lq0gyBGniSjo37yWKVX4VFc", quantity: 1 }],
      mode: "payment",
      allow_promotion_codes: true,
      success_url: `http://localhost:3001/registration/${user.insertedId.toString()}`,
      cancel_url: "http://localhost:3001",
    });

    return res.status(200).json({ sessionId: stripeCheckoutSession.id });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
