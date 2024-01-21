import {
  faDashboard,
  faGear,
  faRightFromBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useEffect } from "react";

const Navbar = () => {
  const [theme, setTheme] = useState("light");

  const [isDarkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = (checked) => {
    setDarkMode(checked);
  };

  useEffect(() => {
    const themes = document.getElementsByTagName("body");
    themes[0].setAttribute("data-theme", theme);
    console.log(theme);
  }, [theme]);

  const manuItems = (
    <React.Fragment>
      {theme === "light" ? (
        <button onClick={() => setTheme("black")}>
          <img src="https://img.icons8.com/ios-filled/50/null/moon-symbol.png" />
        </button>
      ) : (
        <>
          <button onClick={() => setTheme("light")}>
            <img src="https://img.icons8.com/ios/50/null/light-on--v1.png" />
          </button>
        </>
      )}

      {/* <DarkModeSwitch
            style={{ marginBottom: '0px' }}
            checked={isDarkMode}
            onChange={toggleDarkMode}
            size={50}
        /> */}
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/services">Services</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
    </React.Fragment>
  );

  return (
    <div>
      <div className="navbar font-semibold bg-cyan-500 flex justify-between">
        <div className="flex-1">
          {/* Dashboard Icon */}
          <Link to="/" className="text-xl normal-case">
            <img src="https://ik.imagekit.io/tcfp7i31d/logo_with_yp_black_urUeyjKwY.svg" />
          </Link>
        </div>

        <div className="flex-none">
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal p-0">{manuItems}</ul>
          </div>

          <div className="dropdown dropdown-end btn-ghost lg:hidden">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="bg-slate-200 dropdown-content menu p-2 shadow rounded-box w-52"
            >
              {manuItems}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
