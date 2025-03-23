const express = require('express');
const router = express.Router();
const { body, query } = require('express-validator');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewars/auth.middleware');

// 🚗 *Driver Creates a Ride*
router.post('/create',
    authMiddleware.authCaptain,  // Ensure only authenticated drivers can create a ride
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup location'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid dropoff location'),
    body('time').isISO8601().withMessage('Invalid date and time format'),
    body('seats').isInt({ min: 1 }).withMessage('Seats must be at least 1'),
    body('vehicleType').isString().isIn(['auto','car','motorcycle']).withMessage('Invalid vehicle model'),
    body('preferences').optional().isObject().withMessage('Preferences should be an object'),
    rideController.createRide
);

//🚗 *Driver Gets Ride Fare Estimate*
router.get('/get-fare',
    authMiddleware.authUser,  // Ensure only authenticated users can get fare estimate
    query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Invalid dropoff address'),
    rideController.getFare
);

// // 🚗 *Driver Confirms a Ride Request*
router.post('/confirm',
    authMiddleware.authDriver,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    rideController.confirmRide
);

// 🚗 *Driver Starts the Ride (Requires OTP for Security)*
router.get('/start-ride',
    authMiddleware.authDriver,
    query('rideId').isMongoId().withMessage('Invalid ride ID'),
    query('otp').isString().isLength({ min: 6, max: 6 }).withMessage('Invalid OTP'),
    rideController.startRide
);

// 🚗 *Driver Ends the Ride*
router.post('/end-ride',
    authMiddleware.authDriver,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    rideController.endRide
);

module.exports = router;
