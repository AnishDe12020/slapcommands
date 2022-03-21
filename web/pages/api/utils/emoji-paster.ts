// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { rootResponse } from "../../../../src/shared/utils/emoji-paster";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  const query = req.query["keywords"]?.toString().trim();

  res.setHeader("Access-Control-Allow-Origin", "*");
  return res.status(200).json(rootResponse(query));
};

export default handler;
