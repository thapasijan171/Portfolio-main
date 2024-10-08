//API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
{ res }: { req: NextApiRequest; res: NextApiResponse<Data> }): void {
  res.status(200).json({ name: 'Sijan Thapa' })
}
