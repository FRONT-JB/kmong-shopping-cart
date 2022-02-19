import { NextApiRequest, NextApiResponse } from 'next';
import { ProductItem } from '../../mock/product';
import { ProductTypes } from '../../types/product';

export default (req: NextApiRequest, res: NextApiResponse<ProductTypes[]>) => {
  res.status(200).json(ProductItem);
};
