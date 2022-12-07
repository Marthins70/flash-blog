import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'
import { query as q } from 'faunadb'
import { Fauna } from 'services/fauna'

export const authOptions = {
    providers: [
        GithubProvider({
            clientId: String(process.env.GITHUB_ID),
            clientSecret: String(process.env.GITHUB_SECRET),
            authorization: { params: { scope: 'read:user' } }
        }),
        FacebookProvider({
            clientId: String(process.env.FACEBOOK_ID),
            clientSecret: String(process.env.FACEBOOK_SECRET)
        }),
        GoogleProvider({
            clientId: String(process.env.GOOGLE_ID),
            clientSecret: String(process.env.GOOGLE_SECRET)
        })
    ],
    callbacks: {
        async signIn({ user, account, profile }: any) {
            const { email } = user

            try {
                await Fauna.query(
                    q.If(
                        q.Not(
                            q.Exists(
                                q.Match(
                                    q.Index('user_by_email'), 
                                    q.Casefold(user.email)
                                )
                            )
                        ),
                        q.Create(
                            q.Collection('users'),
                            { data: { email } }
                        ),
                        q.Get(
                            q.Match(
                                q.Index('user_by_email'), 
                                q.Casefold(user.email)
                            )
                        )
                    )
                )

                return true

            } catch (error) {
                console.log(error)
                return false
            }
        },
        async session({ session, token, user }: any) {  
            try {
                const userActiveSubscription = await Fauna.query(
                    q.Get(
                        q.Intersection([
                            q.Match(
                                q.Index('subscription_by_user_ref'),
                                q.Select(
                                    'ref',
                                    q.Get(
                                        q.Match(
                                            q.Index('user_by_email'),
                                            q.Casefold(session.user.email)
                                        )
                                    )
                                )
                            ),
                            q.Match(
                                q.Index('subscription_by_status'),
                                'active'
                            )
                        ])
                    )
                )
                return {...session, activeSubscription: userActiveSubscription}
            } catch (error) {
                console.log('error:', error)
                return {...session, activeSubscription: null};
            }
        }
    }
};
export default NextAuth(authOptions)