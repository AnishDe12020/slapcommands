// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import nextjsResponse from "../../../../src/shared/docsearch/nextjs-docs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(nextjsResponse);
};

export default handler;
