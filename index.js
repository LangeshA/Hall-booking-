// index.js

import express from 'express';
//const bodyParser = require('body-parser');

const app = express();
app.use(express.json());

// Load routes
import roomsRoutes from './routes/roomsRoutes.js';
import bookingsRoutes from './routes/bookingsRoutes.js';
import listingsRoutes from './routes/listingsRoutes.js';

// Use routes
app.use('/rooms', roomsRoutes);
app.use('/bookings', bookingsRoutes);
app.use('/listings', listingsRoutes);

// Welcome message with links
app.get('/', (req, res) => {
    res.send(`
    <head>
                <title>Hall Booking App </title>
            </head>
        <h1>Welcome to the Hall Booking App!</h1>
    `);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
