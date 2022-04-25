import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  name: string;
  address: string;
  age: number;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<TData>): void {
  res.status(200).json({ name: 'Mamang John Doe', address: 'West Java - Indonesia', age: 20 });
}
