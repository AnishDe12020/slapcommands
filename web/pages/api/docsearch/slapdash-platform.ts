// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import slapdashPlatformResponse from "../../../../src/shared/docsearch/slapdash-platform-docs";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(slapdashPlatformResponse);
};

export default handler;
