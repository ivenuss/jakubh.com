import ogs from 'open-graph-scraper';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const query = req.query;

  const url = String(query.url);

  if (!url || url === 'undefined')
    return res.status(400).json({ err: "Url query string wasn't provided" });

  const { result, error } = await ogs({ url });

  if (error) res.status(400).json(error);

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=86400, stale-while-revalidate=43200'
  );

  return res.status(200).json(result);
}
