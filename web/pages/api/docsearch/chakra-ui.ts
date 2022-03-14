// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import chakraResponse from "../../../../src/shared/docsearch/chakra-ui-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(chakraResponse);
};

export default handler;