import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  const { fileName } = req.body;
  console.log(`Received file name: ${fileName}`);

  // Respond back to the client
  return res.status(200).json({ message: `File name ${fileName} received successfully!` });
}
