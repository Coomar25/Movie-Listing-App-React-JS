import React from "react";
import AdminSidebar from "../component/AdminSidebar";
import "../assets/css/admin.css";
import "../assets/css/bootstrap-grid.min.css";
import "../assets/css/bootstrap-reboot.min.css";
import { Route, Routes } from "react-router-dom";
import HomeDashboard from "./HomeDashboard";
import AddMovie from "./AddMovie";

const AdminDashboard = () => {
  return (
    <>
      <AdminSidebar />
      <main class="main">
        <div class="container-fluid">
          <div class="row">
          <HomeDashboard />
            <Routes>
              <Route path="/admin/dashboard" element={<HomeDashboard />} />
              <Route path="/admin/addMovie" element={<AddMovie />} />
              
            </Routes>
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
