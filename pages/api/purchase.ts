import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const response = {
    result: req.body,
  };
  res.status(200).json(JSON.stringify(response));
};
