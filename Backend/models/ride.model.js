const mongoose = require('mongoose');

const RideSchema = new mongoose.Schema({
    captain: { type: mongoose.Schema.Types.ObjectId, ref: 'captain', required: true },
    user:{type:mongoose.Schema.Types.ObjectId,ref:'User'},
    pickup: { type: String, required: true },
    destination: { type: String, required: true },
    fare: { type: Number, required: true },
    time: { type: Date, required: true },//seconds
    distance:{type:Number},//meters
    seats: { type: Number, required: true },
    vehicle: { type: String, required: true },
    preferences: { type: Object },  // e.g. { music: true, pets: false, smoking: false }
    status: { type: String, enum: ['pending', 'ongoing', 'completed','cancelled'], default: 'pending' },
    otp: { type: String, select: false }
});

module.exports = mongoose.model('Ride', RideSchema);


