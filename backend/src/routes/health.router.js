import { Router } from 'express';

const router = Router();

router.get('/api/health', (req, res) => {
  res.status(200).json({
    status: 'UP',
    message: 'Car Dealership Inventory API is running healthy',
  });
});

export default router;