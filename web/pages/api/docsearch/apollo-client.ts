// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import apolloClientResponse from "../../../../src/shared/docsearch/apollo-client-docs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(apolloClientResponse);
};

export default handler;
