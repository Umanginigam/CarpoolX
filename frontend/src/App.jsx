import React from 'react'
import './index.css'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup'
import Captionlogin from './pages/Captionlogin'
import CaptionSignup from './pages/CaptionSignup'
import Home from './pages/Home';
import UserProtectWrapper from './pages/UserProtectWrapper';
import UserLogout from './pages/UserLogout'
import CaptainHome from './pages/CaptionHome'
import CaptainProtectWrapper from './pages/CaptionProtectWrapper';
import Riding from './pages/Riding';

const App = () => {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/riding' element={<Riding />} />
        <Route path='/signup' element={<UserSignup />} />
        <Route path='/captain-login' element={<Captionlogin />} />
        <Route path='/captain-signup' element={<CaptionSignup />} />
        <Route path='/home' element={
          <UserProtectWrapper>
            <Home/>
            </UserProtectWrapper>}/>
            <Route path='/user/logout'
          element={<UserProtectWrapper>
            <UserLogout />
          </UserProtectWrapper>
          } />
          <Route path='/captain-home' element={
          <CaptainProtectWrapper>
            <CaptainHome />
          </CaptainProtectWrapper>

        } />
        
      </Routes>

        </div>
  )}
  export default App