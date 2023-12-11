import React from "react";
import AdminSidebar from "./component/AdminSidebar";
// import "./assets/css/admin.css";
// import "./assets/css/bootstrap-grid.min.css";
// import "./assets/css/select2.min.css";
import HomeDashboard from "./ui/HomeDashboard";
import AddMovie from "./ui/AddMovie";
import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const location = useLocation();
  return (
    <>
      <main class="main">
        <div class="container-fluid">
          <div class="row">
             <AdminSidebar />
            {location.pathname === "/admin" && <HomeDashboard />}
            {location.pathname === "/admin/addmovie" && <AddMovie />}
          </div>
        </div>
      </main>
    </>
  );
};

export default AdminDashboard;
