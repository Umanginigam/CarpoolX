import React, { useContext, useState } from "react";
import { CaptainDataContext } from "../context/CapatainContext.";
import CreateRideForm from "../pages/Captionform";
const GOOGLE_MAPS_API_KEY = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const CaptainDetails = () => {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const { captain } = useContext(CaptainDataContext);

    if (!captain) {
        return <p className="text-center text-gray-500">Loading captain details...</p>;
    }

    const { fullname = {} } = captain;
    const { firstname = "John", lastname = "Doe" } = fullname;

    return (
        <div className="min-h-screen flex items-center justify-center bg-black">
        <div className="p-6 bg-white rounded-xl shadow-lg w-full max-w-lg mx-auto">
            {/* Captain Info */}
            <div className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center gap-4">
                    <img
                        className="h-14 w-14 rounded-full object-cover"
                        src="/OIP.jpeg"
                        alt="Captain"
                    />
                    <h4 className="text-xl font-semibold capitalize">{firstname} {lastname}</h4>
                </div>
                <div className="text-right">
                    <h4 className="text-2xl font-bold text-green-600">₹295.20</h4>
                    <p className="text-sm text-gray-500">Total Earnings</p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 text-center mt-6">
                {[
                    { icon: "ri-timer-2-line", value: "10.2", label: "Hours Online", color: "text-blue-600" },
                    { icon: "ri-speed-up-line", value: "24", label: "Total Rides", color: "text-red-500" },
                    { icon: "ri-star-line", value: "4.8", label: "Rating", color: "text-yellow-500" },
                ].map((item, index) => (
                    <div key={index} className="p-4 bg-gray-100 rounded-lg shadow-sm">
                        <i className={`text-3xl ${item.color} ${item.icon}`}></i>
                        <h5 className="text-xl font-bold mt-2">{item.value}</h5>
                        <p className="text-sm text-gray-600">{item.label}</p>
                    </div>
                ))}
            </div>

            {/* Map Image */}
            <div className="mt-6 rounded-xl overflow-hidden shadow-md">
                <img
                    className="w-full h-56 object-cover"
                    src={`https://maps.googleapis.com/maps/api/staticmap?center=New+York,NY&zoom=12&size=600x300&maptype=roadmap&markers=color:red%7Clabel:C%7C40.712776,-74.005974&key=${GOOGLE_MAPS_API_KEY}`}
                    alt="Map"
                />
            </div>

            {/* Create Ride Button */}
            <div className="mt-6 flex justify-center">
                <button
                 onClick={() => setIsFormOpen(true)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition-all shadow-md">
                    🚗 Create a Ride
                </button>
            </div>
            {isFormOpen && <CreateRideForm onClose={() => setIsFormOpen(false)} />}
        
        </div>
    </div>
    );
};

export default CaptainDetails;


    
