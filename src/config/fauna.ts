import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.NEXT_PUBLIC_FAUNADB_KEY as string,
  domain: 'db.fauna.com',
  scheme: 'https',
  port: 443
})