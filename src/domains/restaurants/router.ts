import { Router, Request, Response } from 'express';
import { CustomError } from '@common/models';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  throw new CustomError(403, 'no no no');
  res.send('hai');
});

export default router;