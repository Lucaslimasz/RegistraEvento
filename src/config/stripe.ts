import Stripe from "stripe";
import version from '../../package.json'

export const stripe = new Stripe(
  process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY as string,
  {
    apiVersion: "2022-08-01",
    appInfo: {
      name: 'Ignews',
      version: String(version)
    }
  }
)