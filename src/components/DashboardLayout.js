


// components/DashboardLayout.js
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavHeader from './NavHeader';
import Sidebar from './Sidebar';
// import Footer from './Footer';    


const DashboardLayout = ({ page }) => {
  return (
    <div id="main-wrapper">
      <div className="nav-header">
        <a href="index.html" className="brand-logo">
          <img className="logo-abbr" src="../assets/dashboard/images/dashboard/mpay-dashboard-logo.svg" alt="Logo" />
          <img className="brand-title" src="../assets/dashboard/images/dashboard/mpay-dashboard-logo.svg" alt="Brand Title" />
        </a>
        <div className="nav-control">
          <div className="hamburger">
            <span className="line"></span>
            <span className="line"></span>
            <span className="line"></span>
          </div>
        </div>
      </div>

      <NavHeader />
      <Sidebar page={page} />
      <div className="content-body">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;