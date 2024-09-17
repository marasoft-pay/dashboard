// components/Sidebar.js
import React from 'react';

const Sidebar = ({ page }) => {
  return (
    <div className="deznav">
      <div className="deznav-scroll">
        <ul className="metismenu menu_kyc" id="menu">
          {page === 'kyc' && (
            <>
              <li>
                <a className="ai-icon pre-dashboard-nav" href="/" aria-expanded="false">
                  <i className="flaticon-025-dashboard"></i>
                  <span className="nav-text">KYC Setup</span>
                </a>
              </li>
              <li>
                <a href="/dev_tools" className="ai-icon pre-dashboard-nav" aria-expanded="false">
                  <i className="flaticon-013-checkmark"></i>
                  <span className="nav-text">Developer Tools</span>
                </a>
              </li>
              <li>
                <hr />
                <a href="/login" className="ai-icon pre-dashboard-nav" aria-expanded="false">
                  <i className="flaticon-013-checkmark"></i>
                  <span className="nav-text">Log Out</span>
                </a>
              </li>
            </>
          )}
          {page === 'dashboard' && (
            <>
              <li>
                <a className="ai-icon" href="/dashboard" aria-expanded="false">
                  <i className="flaticon-025-dashboard"></i>
                  <span className="nav-text">Dashboard</span>
                </a>
              </li>
              <li>
                <a href="/settings" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-013-checkmark"></i>
                  <span className="nav-text">Settings</span>
                </a>
              </li>
              <li>
                <a href="/profile" className="ai-icon" aria-expanded="false">
                  <i className="flaticon-013-checkmark"></i>
                  <span className="nav-text">Profile</span>
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;