import { Client } from 'faunadb'

export const Fauna = new Client({
    secret: String(process.env.FAUNA_KEY)
})