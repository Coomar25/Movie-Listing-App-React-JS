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
        </Routes>
      </Layout>
    ),
  },
  
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};
export default App