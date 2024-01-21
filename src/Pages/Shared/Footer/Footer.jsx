import { faAppleAlt, faAppleWhole } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import footer from "../../../assets/images/footer.png";

const Footer = () => {
  return (
    <div>
      <footer
        style={{
          background: `url(${footer})`,
          backgroundSize: "cover",
        }}
        className=" p-10"
      >
        <div className="footer">
          <div>
            <span className="text-gray-700 text-1xl font-extrabold">
              Services
            </span>
            <Link to={"/"} className="link link-hover">
              Knee Pain
            </Link>
            <Link to={"/"} className="link link-hover">
              Neck Pain
            </Link>
            <Link to={"/"} className="link link-hover">
              Back Pain
            </Link>
            <Link to={"/"} className="link link-hover">
              Shoulder Pain
            </Link>
          </div>
          <div>
            <span className=" text-gray-700 text-1xl font-extrabold">
              Company
            </span>
            <Link to="/about" className="link link-hover">
              About us
            </Link>
            <Link to="#contact" className="link link-hover">
              Contact
            </Link>
            <Link className="link link-hover">Career</Link>
          </div>
          <div className="text-center ">
            <h3 className="text-2xl font-bold mb-2 "> Download our app </h3>
            <p className="text-2xl"> Stay fit. All day, every day. </p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <p>Copyright © 2022</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
