import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import bgImage from '/image.png' // Adjust the path as needed

const UserLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { setUser } = useContext(UserDataContext)
  const navigate = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()

    const userData = { email, password }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)

    if (response.status === 200) {
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token', data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }

  return (
    <div
      className='h-screen flex justify-center items-center bg-cover bg-center'
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className='bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-90 '>
        <img
          className='w-16 mx-auto mb-6'
          src="OIP.jpeg" // Adjust the path as needed'
          alt='Logo'
        />
        <form onSubmit={submitHandler}>
          <h3 className='text-xl font-semibold text-gray-800 mb-3'>Login to Your Account</h3>

          <label className='block text-gray-700 font-medium mb-1'>Email</label>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='w-full mb-4 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300'
            type='email'
            placeholder='email@example.com'
          />

          <label className='block text-gray-700 font-medium mb-1'>Password</label>
          <input
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='w-full mb-6 px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300'
            type='password'
            placeholder='••••••••'
          />

          <button
            className='w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition'
          >
            Login
          </button>
        </form>

        <p className='text-center text-gray-700 mt-4'>
          New here? <Link to='/signup' className='text-blue-500 font-semibold'>Create an Account</Link>
        </p>

        <Link
          to='/captain-login'
          className='block mt-4 bg-green-600 text-white font-semibold text-center py-2 rounded-lg hover:bg-green-700 transition'
        >
          Sign in as Captain
        </Link>
      </div>
    </div>
  )
}

export default UserLogin
