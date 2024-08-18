const mongoose = require('mongoose');
const Trip = mongoose.model('Trip'); // Make sure 'Trip' is the correct model name

// Example method for updating a trip
const updateTrip = (req, res) => {
    const tripId = req.params.tripId;

    // Logic to update the trip using Trip model
    Trip.findByIdAndUpdate(tripId, req.body, { new: true }, (err, trip) => {
        if (err) {
            return res.status(500).json(err);
        }
        if (!trip) {
            return res.status(404).json({ message: "Trip not found" });
        }
        res.status(200).json(trip);
    });
};

// Export the methods
module.exports = {
    updateTrip,
    // Other methods can be added here
};
