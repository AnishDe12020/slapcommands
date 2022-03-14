// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import nextjsResponse from "../../../../src/shared/docsearch/nextjs-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(nextjsResponse);
};

export default handler;
