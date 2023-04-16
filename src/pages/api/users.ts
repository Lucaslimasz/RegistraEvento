/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from "next";
import connect from "@config/mongo-db";
import { ObjectId } from "mongodb";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { db } = await connect();
  const {id} = req.body;

  if (req.method === "POST") {
    const user = await db.collection('homensdeverdades').findOne(new ObjectId(id));

    return res.status(200).json(user);
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method not allowed");
  }
};
