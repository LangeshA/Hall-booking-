// bookingsController.js

let bookings = [];

const bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;

    // Check if the room is available for booking
    const isRoomAvailable = !bookings.some(
        booking =>
            booking.roomId === roomId &&
            booking.date === date &&
            ((startTime >= booking.startTime && startTime < booking.endTime) ||
                (endTime > booking.startTime && endTime <= booking.endTime) ||
                (startTime <= booking.startTime && endTime >= booking.endTime))
    );

    if (!isRoomAvailable) {
        return res.send('Room already booked for the selected date and time.');
    }

    const booking = {
        id: bookings.length + 1,
        customerName,
        date,
        startTime,
        endTime,
        roomId,
        status: 'Booked',
        bookingDate: new Date().toISOString(),
    };
    bookings.push(booking);
    res.send(`Room booked successfully. Booking ID: ${booking.id}`);
};

// Export the bookings array
export default {
    bookRoom,
bookings }
