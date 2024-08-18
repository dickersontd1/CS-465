const express = require('express'); // Express app
const router = express.Router(); // Router logic
const tripsController = require('../controllers/trips');

// This is where we import the controllers we will route
const tripsController = require('../controllers/trips');

//define route for our trips endpoint
router
.route('/trips/:tripCode')
.get(tripsController.tripsFindByCode); // GET Method routes tripList

module.exports = router;