// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import apolloClientResponse from "../../../../src/shared/docsearch/apollo-client-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(apolloClientResponse);
};

export default handler;
