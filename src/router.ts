import { Router } from 'express';

import {RestaurantRouter} from '@domains/restaurants';
import {asyncMiddleware, handleCustomErrors, handleGlobalErrors, handleValidationError} from '@common/middlewares';

const router = Router();

// Routers
router.use('/restaurants', asyncMiddleware(RestaurantRouter));

// Error handling
router.use(handleCustomErrors);
router.use(handleValidationError);
router.use(handleGlobalErrors);

export default router;