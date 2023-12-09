import React from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
} from "react-router-dom";
import Home from './ui/Home';
import Navbar from './component/Navbar';
import './App.css';
import MovieDetail from './ui/MovieDetail';
import SignIn from './component/SignIn';
import Booking from './ui/Booking';
import { ToastContainer } from 'react-toastify';
import Profile from './ui/Profile';
import SIgnUp from './component/SIgnUp';
import AdminLogin from './admin/component/AdminLogin';

const Layout = ({ children }) => (
  <>
    <Navbar />
    {children}
  </>
);



const router = createBrowserRouter([
  {
    path: "*",
    element: (
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/moviedetails" element={<MovieDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/signup' element={<SIgnUp />} />
          <Route path='/admin/login' element={<AdminLogin />} />
        </Routes>
      </Layout>
    ),
  },

  {
    path: "/admin/dashboard",
    element: (
      <Routes>
        <Route path="/login" element={<AdminLogin />} />
      </Routes>
    )
  }
  
]);

const App = () => {
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
};
export default App