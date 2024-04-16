// listingsController.js

import  bookings  from './bookingsController.js';
let book=(bookings.bookings)

const listBookedData = (req, res) => {
    const bookedDataText = bookings.bookings.map(booking =>
        `Booking ID: ${booking.id}, Customer Name: ${booking.customerName}, Date: ${booking.date}, Start Time: ${booking.startTime}, End Time: ${booking.endTime}`
    ).join('<br>');

    res.send(bookedDataText);
};

const listCustomersWithBookedData = (req, res) => {
    const customersWithBookedDataText =bookings.bookings.map(booking =>
        `Customer Name: ${booking.customerName}, Room ID: ${booking.roomId}, Date: ${booking.date}, Start Time: ${booking.startTime}, End Time: ${booking.endTime}, Booking ID: ${booking.id}, Booking Date: ${booking.bookingDate}, Booking Status: ${booking.status}`
    ).join('<br><br>');

    res.send(customersWithBookedDataText);
};
export default {
    listBookedData,
    listCustomersWithBookedData
}
