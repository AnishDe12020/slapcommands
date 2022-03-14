// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiResponse } from "next";
import slapdashPlatformResponse from "../../../../src/shared/docsearch/slapdash-platform-docs";

const handler = (_, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(slapdashPlatformResponse);
};

export default handler;
