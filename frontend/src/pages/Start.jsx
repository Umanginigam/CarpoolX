import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div className="relative h-screen flex flex-col justify-end">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/carpooling.png')" }}>
        <div className="absolute inset-0 bg-black opacity-30"></div> {/* Dark Overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center bg-white py-8 px-6 rounded-t-3xl shadow-lg">
        <img className="w-24 mb-4" src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="Uber Logo" />
        <h2 className="text-3xl font-semibold text-gray-900">Get Started with PoolX</h2>
        <p className="text-gray-600 mt-2">Find or offer rides safely and affordably.</p>
        <Link to='/login' className="mt-5 bg-black text-white py-3 px-8 rounded-lg text-lg shadow-md hover:bg-gray-800 transition-all duration-300">
          Continue
        </Link>
      </div>
    </div>
  )
}

export default Start