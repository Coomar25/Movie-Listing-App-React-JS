import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from './ui/Home';
import Navbar from './component/Navbar';
import './index.css';
import './App.css';
import MovieDetail from './ui/MovieDetail';
import SignIn from './component/SignIn';
import Booking from './ui/Booking';
import { ToastContainer } from 'react-toastify';
import Profile from './ui/Profile';
import SIgnUp from './component/SIgnUp';
import AdminLogin from './admin/component/AdminLogin';
import AdminDashboard from './admin/AdminDashboard';
import { getTokenFromCookie } from './service/TokenService';



const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);


const {token} = getTokenFromCookie();

const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetails/:slug" element={<MovieDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/booking/:slug" element={ token ? (<Booking />) : (<SIgnUp />)} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/signup' element={<SIgnUp />} />
          <Route path='/admin/login' element={<AdminLogin />} />
        </Routes>
      </Layout>
    ),
  },

  {
    path: "admin/*",
    element: <AdminDashboard/> 
  },


  
]);

const App = () => {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
      {process.env.NODE_ENV === 'development' ? process.env.REACT_APP_DEV_MODE : process.env.REACT_APP_PRO_MODE}
    </div>
  );
};
export default App