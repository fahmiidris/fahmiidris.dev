import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  name: string;
  age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TData>) {
  res.status(200).json({ name: 'Mamang John Doe', age: 20 });
}
