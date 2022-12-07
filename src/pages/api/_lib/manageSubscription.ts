import { Fauna } from "services/fauna"
import { query as q } from "faunadb"
import { stripe } from "services/stripe"

export async function saveSubscription(
    subscriptionId: string,
    customerId: string,
    createAction: boolean = false
) {
    console.log('saveSubscription', subscriptionId, customerId, createAction)
    const userRef = await Fauna.query(
        q.Select(
            "ref",
            q.Get(
                q.Match(
                    q.Index('user_by_stripe_customer_id'), 
                    customerId
                )
            )
        )
    )

    const subscription = await stripe.subscriptions.retrieve(subscriptionId)

    const subscriptionData = {
        id: subscriptionId,
        userId: userRef,
        status: subscription.status,
        price_id: subscription.items.data[0].price.id,

    }

    if(createAction) {
        await Fauna.query(
            q.Create(
                q.Collection('subscriptions'),
                { data: subscriptionData }
            )
        )
    } else {
        await Fauna.query(
            q.Replace(
                q.Select(
                    'ref',
                    q.Get(
                        q.Match(
                            q.Index('subscription_by_id'),
                            subscriptionId
                        )
                    )
                ),
                { data: subscriptionData }
            )
        )
    }
}