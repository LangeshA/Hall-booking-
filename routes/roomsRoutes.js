import express from 'express';
const router = express.Router();
import roomsController from '../controllers/roomsController.js';

// POST /rooms/createRoom
router.post('/createRoom', roomsController.createRoom);

export default router;
