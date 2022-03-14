// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import clerkResponse from "../../../../src/shared/docsearch/clerk-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(clerkResponse);
};

export default handler;
