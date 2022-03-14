// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import tailwindResponse from "../../../../src/shared/docsearch/tailwind-css-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(tailwindResponse);
};

export default handler;
