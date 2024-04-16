// listingsRoutes.js

import express from 'express';
const router = express.Router();
import listingsController from '../controllers/listingsController.js'

// GET /listings/bookedData
router.get('/bookedData', listingsController.listBookedData);

// GET /listings/customersWithBookedData
router.get('/customersWithBookedData', listingsController.listCustomersWithBookedData);

export default router;
