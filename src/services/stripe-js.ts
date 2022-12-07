import { loadStripe } from '@stripe/stripe-js'

export async function getStripeJs() {
    const stripePublicKey = String(process.env.NEXT_PUBLIC_STRIPE_KEY)
    const stripeJs = await loadStripe(stripePublicKey)

    return stripeJs
}