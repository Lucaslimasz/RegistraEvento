import { Client } from 'faunadb';

export const fauna = new Client({
  secret: process.env.FAUNADB_KEY as string,
  domain: 'db.fauna.com',
  scheme: 'https',
  port: 443
})