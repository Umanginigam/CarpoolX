import React, { useRef, useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import CaptainDetails from '../components/CaptionDetails';
import RidePopUp from '../components/RidePopUp';
import ConfirmRidePopUp from '../components/ConfirmRidePopUp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
 import { SocketContext } from '../context/SocketContext';
import { CaptainDataContext } from '../context/CapatainContext.';
import axios from 'axios';
 import { GoogleMap, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';


const CaptainHome = () => {
    const [ridePopupPanel, setRidePopupPanel] = useState(false);
    const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false);
    const [ride, setRide] = useState(null);
    const [hideDetails, setHideDetails] = useState(false);
    const [matchingPercentage, setMatchingPercentage] = useState(0);
    const [directions, setDirections] = useState(null);

    const ridePopupPanelRef = useRef(null);
    const confirmRidePopupPanelRef = useRef(null);

     const { socket } = useContext(SocketContext);
    const { captain } = useContext(CaptainDataContext);

//socket id
    useEffect(() => {
        socket.emit('join', { userId: captain._id, userType: 'captain' });

        const updateLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    socket.emit('update-location-captain', {
                        userId: captain._id,
                        location: {
                            ltd: position.coords.latitude,
                            lng: position.coords.longitude
                        }
                    });
                });
            }
        };

        const locationInterval = setInterval(updateLocation, 10000);
        updateLocation();

        return () => clearInterval(locationInterval);
    }, [socket, captain]);

    socket.on('new-ride', (ride) => {
      console.log('New ride received:', ride);
  });
  
//match percentage
    socket.on('new-ride', async (data) => {
        const matchPercentage = await calculateRouteMatch(data.pickup, data.dropoff);
        setMatchingPercentage(matchPercentage);
        setRide(data);
        setRidePopupPanel(true);
    });
    console.log(matchingPercentage);

    async function calculateRouteMatch(pickup, dropoff) {
      if (!window.google || !window.google.maps) {
        console.error("Google Maps API is not loaded yet.");
        return 0;
    }


        const directionsService = new window.google.maps.DirectionsService();
        const result = await directionsService.route({
            origin: pickup,
            destination: dropoff,
            travelMode: window.google.maps.TravelMode.DRIVING
        });
        setDirections(result);
        return Math.floor(Math.random() * 101);
    }

    async function confirmRide() {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`, {
            rideId: ride._id,
            captainId: captain._id,
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        setRidePopupPanel(false);
        setConfirmRidePopupPanel(true);
    }

    async function rejectRide() {
        await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/reject`, {
            rideId: ride._id,
            captainId: captain._id,
        }, {
            headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
        });

        setRidePopupPanel(false);
        setRide(null);
    }

    useGSAP(() => {
        gsap.to(ridePopupPanelRef.current, {
            transform: ridePopupPanel ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [ridePopupPanel]);

    useGSAP(() => {
        gsap.to(confirmRidePopupPanelRef.current, {
            transform: confirmRidePopupPanel ? 'translateY(0)' : 'translateY(100%)'
        });
    }, [confirmRidePopupPanel]);

    return (
        <div className='h-screen'>
            <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
                <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
                <Link to='/captain-home' className='h-10 w-10 bg-white flex items-center justify-center rounded-full'>
                    <i className="text-lg font-medium ri-logout-box-r-line"></i>
                </Link>
            </div>
{/* 
            <div className='h-3/5'>
                <GoogleMap
                    center={{ lat: 28.7041, lng: 77.1025 }}
                    zoom={12}
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                >
                    {directions && <DirectionsRenderer directions={directions} />}
                </GoogleMap>
            </div> */}

            <div className='h-2/5 p-6'>
                <CaptainDetails hideDetails={hideDetails} setHideDetails={setHideDetails} />
                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold">Privacy:</p>
                    <button 
                        className={`px-4 py-2 text-white ${hideDetails ? 'bg-red-500' : 'bg-green-500'} rounded-lg`}
                        onClick={() => setHideDetails(!hideDetails)}
                    >
                        {hideDetails ? 'Enable Details' : 'Hide Details'}
                    </button>
                </div>
            </div>

            <div ref={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <RidePopUp
                    ride={ride}
                    setRidePopupPanel={setRidePopupPanel}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    confirmRide={confirmRide}
                    rejectRide={rejectRide}
                    matchingPercentage={matchingPercentage}
                />
            </div>

            <div ref={confirmRidePopupPanelRef} className='fixed w-full h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12'>
                <ConfirmRidePopUp
                    ride={ride}
                    setConfirmRidePopupPanel={setConfirmRidePopupPanel}
                    setRidePopupPanel={setRidePopupPanel}
                />
            </div>
        </div>
    );
};

export default CaptainHome;
