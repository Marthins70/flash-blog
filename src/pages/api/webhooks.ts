import { NextApiRequest, NextApiResponse } from "next"
import { stripe } from "services/stripe"
import { Readable } from "stream"
import Stripe from "stripe"
import { saveSubscription } from "./_lib/manageSubscription"
import getRawBody from 'raw-body'
import { buffer } from 'micro'

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantEvents = new Set([
    'checkout.session.completed',
    'customer.subscription.updated',
    'customer.subscription.deleted',
])

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        console.log(req.headers)
        const buf = await buffer(req)

        const sig = req.headers["stripe-signature"]!

        let event: Stripe.Event

        try {
            event = stripe.webhooks.constructEvent(buf.toString(), sig, endpointSecret)
            console.log('aqui está o evento: ', event)
        } catch (error: any) {
            console.log('deu erro no evento:', error.message)
            return res.status(400).send(`Webhook error: ${error.message}`)
        }

        console.log(event)

        const type = event.type

        if (relevantEvents.has(type)) {
            try {
                switch (type) {
                    case 'customer.subscription.update':
                    case 'customer.subscription.deleted':
                        const subscription = event.data.object as Stripe.Subscription
                        await saveSubscription(
                            subscription.id, 
                            subscription.customer.toString(),
                            false
                        )

                        break
                    case 'checkout.session.completed':
                        const checkoutSession = event.data.object as Stripe.Checkout.Session
                        await saveSubscription(String(checkoutSession.subscription), String(checkoutSession.customer), true)

                        break
                    default:
                        throw new Error('Unhandled event.')
                }
            } catch (error) {
                return res.json({ error: 'Webhook handler failed.' })
            }
        }

        res.json({ received: true })
    } else {
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method not allowed')
    }
}