import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import FacebookProvider from 'next-auth/providers/facebook'
import GoogleProvider from 'next-auth/providers/google'

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
};
export default NextAuth(authOptions);