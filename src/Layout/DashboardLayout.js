import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBookmark, FaMagento } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faPeopleRoof } from "@fortawesome/free-solid-svg-icons";

const DashboardLayout = () => {
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-drawer"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-3 text-center border-r-4 border-indigo-400 w-60 bg-base-100 text-base-content"></ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
