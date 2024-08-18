const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    destination: String,
    date: { type: Date, required: true },
    price: Number,
    seats: Number
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
