import { useState } from 'react'
import './App.css'
import Home from './components/Home.jsx'
import { useNavigate } from 'react-router-dom'
import Register from './Register'
import {SignIn} from './SignIn'
import {  Routes, Route, BrowserRouter } from 'react-router-dom'
import GetCurrentUser from './Hooks/GetCurrentUser.jsx'
import { useSelector } from 'react-redux'
import MyCart from './pages/MyCart'
import Feedback from './components/Feedback'
import  Contact  from './components/Contact.jsx'  
import AddPhone from './components/AddPhone'
import MyOrder from './pages/MyOrder'
import { GetItem } from './Hooks/GetItem'
import FeedbackConfirmation from './pages/FeedbackConfirmation'

function App() {
  const currentUser = useSelector((state) => state.user.currentUser);  
  GetCurrentUser();
  GetItem();

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home /> } />
          <Route path='/Home' element={<Home />} />
           <Route path='/register' element={!currentUser ? <Register /> :<Home />} />
          <Route path='/signin' element={!currentUser ? <SignIn /> :<Home />} />
          <Route path='/mycart' element={!currentUser ? <SignIn /> :<MyCart />} />
          <Route path='/feedback' element={!currentUser ? <SignIn /> :<Feedback />} />
          <Route path='/contact' element={<Contact />} />
           <Route path='/add-phone' element={ !currentUser ? <SignIn /> : <AddPhone />} />
           <Route path='/myorders' element={  <MyOrder />} />
            <Route path='/feedback-confirmation' element={  <FeedbackConfirmation />} />
        </Routes>
    </BrowserRouter>
  )
}

  
  


export default App
