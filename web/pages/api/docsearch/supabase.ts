// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import {
  rootResponse,
  itemResponse,
} from "../../../../src/shared/docsearch/supabase-docs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const itemString = req.query.item;

  const response = itemString ? itemResponse(itemString) : rootResponse();

  return res.status(200).json(response);
};

export default handler;
