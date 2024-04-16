// bookingsRoutes.js

import express from 'express';
const router = express.Router();
import bookingsController from '../controllers/bookingsController.js';

// POST /bookings/bookRoom
router.post('/bookRoom', bookingsController.bookRoom);

export default router
