







import React, { useState,Suspense } from 'react'
//import Navver from './navver'
// import Navcart from './Mern/Navcart'
// import { useDispatch, useSelector } from 'react-redux'
// import Catagory from './project2/Catagory'
// import { addcard } from './features/cartSlice'
import { BrowserRouter,Routes,Route, useLocation } from 'react-router-dom'
import Header from './Project3/Header'
import Product from './Project3/Product'
import Productdetails from './Project3/Productdetails'
import Search from './Project3/Search'
import Cart from './Project3/Cart'
import Navbar from './compunents/Navbar'
import { data } from './Data'
import { useAuth } from './Mern/Auth'
import Register from './pages/Register'
import Login from './pages/Login'
import Home from './compunents/Home'
import Daschbord from './pages/Daschbord'
import Footer from './compunents/Footer'

import Blog from './pages/Blog'
import Trading from './Home/Trading'
import Hero from './Home/Hero'
import About from './pages/About'
import Creator from './Home/Creator'
import Creators from './pages/Createo'
//import Conteact from './pages/Conteact'
import Updateblog from './Dashbord/Updateblog'
import Details from './pages/Details'
import Notfound from './Home/Notfound'
import Reg from './ourproject/Reg'
import Login1 from './ourproject/Login'
import Home1 from './ourproject/Home1'
import Nav1 from './ourproject/Nav1'
import Aout from './ourproject/Aout'
import { Logout } from './ourproject/Logout1'
import { useAuth1 } from './Context/AuthProvider'
//import Suvice from './ourproject/Suvice'
//import Homepage from './ourproject/Homepage'
import Detailspage from './ourproject/Detailspage'
import Freedetails from './ourproject/Freedetails'
//import React,{Suspense} from 'react'
const Homepage=React.lazy(()=>import('./ourproject/Homepage'))
const Conteact=React.lazy(()=>import('./pages/Conteact'))
const Service=React.lazy(()=>import('./ourproject/Suvice'))
function App() {
//const location=useLocation()
//const hiddNavbarFooter=["/dashbord","/login","/reg"].includes(
  //location.pathname
//)
const {islog}=useAuth1()

  return (
    <>
    <Nav1></Nav1>
    <Suspense fallback={
      <p>waiting .....</p>
    }>
        <Routes>
 <Route path='/'element={<Homepage/>}></Route>

 <Route path='/reg'element={<Reg/>}></Route>
 <Route path='/pro' element={<Service/>}></Route>

    <Route path='/login'element={<Login1/>}></Route>

   {islog?
      <Route path='/about'element={<Aout/>}></Route>:"login"
   
  }


    
    <Route path='/con'element={<Conteact/>}></Route>
    <Route path='/logout'element={<Logout/>}></Route>
    <Route path="/details/:id" element={<Detailspage/>}></Route>
    <Route path="/free/:id" element={<Freedetails/>}></Route>
    
    <Route path='*' element={<Notfound/>}/>


</Routes>
</Suspense>
<Footer/>



    </>
  )
}

export default App
