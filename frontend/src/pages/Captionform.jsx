import React, { useState } from "react";

const CreateRideForm = ({ onClose }) => {
    const [rideDetails, setRideDetails] = useState({
        pickup: "",
        drop: "",
        departureTime: "",
        seats: 1,
        carModel: "",
        licensePlate: "",
        music: false,
        smoking: false,
        pets: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setRideDetails({
            ...rideDetails,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Ride Created:", rideDetails);
        onClose(); // Close form after submission
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
                <h2 className="text-2xl font-bold text-center mb-4">🚗 Create a Ride</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Pickup & Drop */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Pickup Location</label>
                        <input 
                            type="text" 
                            name="pickup" 
                            value={rideDetails.pickup} 
                            onChange={handleChange} 
                            placeholder="Enter pickup location"
                            className="p-2 border rounded-lg w-full"
                            required 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Drop Location</label>
                        <input 
                            type="text" 
                            name="drop" 
                            value={rideDetails.drop} 
                            onChange={handleChange} 
                            placeholder="Enter drop location"
                            className="p-2 border rounded-lg w-full"
                            required 
                        />
                    </div>

                    {/* Departure Date & Time */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Departure Time & Date</label>
                        <input 
                            type="datetime-local" 
                            name="departureTime" 
                            value={rideDetails.departureTime} 
                            onChange={handleChange} 
                            className="p-2 border rounded-lg w-full"
                            required 
                        />
                    </div>

                    {/* Available Seats */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Available Seats</label>
                        <input 
                            type="number" 
                            name="seats" 
                            value={rideDetails.seats} 
                            onChange={handleChange} 
                            min="1" 
                            max="7" 
                            className="p-2 border rounded-lg w-full"
                            required 
                        />
                    </div>

                    {/* Vehicle Details */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="font-medium">Car Model</label>
                            <input 
                                type="text" 
                                name="carModel" 
                                value={rideDetails.carModel} 
                                onChange={handleChange} 
                                placeholder="e.g., Toyota Corolla"
                                className="p-2 border rounded-lg w-full"
                                required 
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="font-medium">License Plate</label>
                            <input 
                                type="text" 
                                name="licensePlate" 
                                value={rideDetails.licensePlate} 
                                onChange={handleChange} 
                                placeholder="e.g., XYZ-1234"
                                className="p-2 border rounded-lg w-full"
                                required 
                            />
                        </div>
                    </div>

                    {/* Preferences & Rules */}
                    <div className="flex flex-col gap-2">
                        <label className="font-medium">Preferences & Rules</label>
                        <div className="flex gap-4">
                            <label className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    name="music" 
                                    checked={rideDetails.music} 
                                    onChange={handleChange} 
                                    className="w-4 h-4"
                                />
                                🎵 Music
                            </label>
                            <label className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    name="smoking" 
                                    checked={rideDetails.smoking} 
                                    onChange={handleChange} 
                                    className="w-4 h-4"
                                />
                                🚬 Smoking
                            </label>
                            <label className="flex items-center gap-2">
                                <input 
                                    type="checkbox" 
                                    name="pets" 
                                    checked={rideDetails.pets} 
                                    onChange={handleChange} 
                                    className="w-4 h-4"
                                />
                                🐶 Pets
                            </label>
                        </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex justify-between mt-4">
                        <button 
                            type="button" 
                            onClick={onClose} 
                            className="px-4 py-2 border rounded-lg bg-gray-200 hover:bg-gray-300"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                        >
                            Create Ride
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateRideForm;
