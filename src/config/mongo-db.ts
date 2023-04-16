import { MongoClient } from "mongodb";

const url = process.env.MONGODB_URI;

const client = new MongoClient(String(url));

export default async function connect() {
  await client.connect();

  const db = client.db("homensdeverdade");
  
	return {db, client}
}
