import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CapatainContext.';
import axios from "axios";

const Captainlogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { captain, setCaptain } = React.useContext(CaptainDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    const captain = { email, password };
    
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if (response.status === 200) {
      const data = response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  };

  return (
    <div className='p-7 h-screen flex flex-col justify-between bg-cover bg-center' 
         style={{ backgroundImage: "url('/stock-vector-carpool-service-weekend-journey-young-man-and-woman-people-character-in-red-car-drive-1351060844.jpg')" }}>
      <div className='bg-white p-6 pt-15 rounded-lg shadow-lg max-w-md mx-auto'>
        <img className='w-20 mb-3 mx-auto' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />

        <form onSubmit={submitHandler}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='bg-gray-200 mb-4 rounded-lg px-4 py-2 border w-full text-lg'
            type="email"
            placeholder='email@example.com'
          />

          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-gray-200 mb-4 rounded-lg px-4 py-2 border w-full text-lg'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            type="password"
            placeholder='password'
          />

          <button className='bg-black text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg'>
            Login
          </button>
        </form>

        <p className='text-center'>Join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>

      <div>
        <Link to='/login' className='bg-orange-600 flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg'>
          Sign in as User
        </Link>
      </div>
    </div>
  );
};

export default Captainlogin;
