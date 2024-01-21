import React from "react";
import mission from "../../../assets/images/mission.png";
import vision from "../../../assets/images/vision.png";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-5xl my-5 text-center  font-bold">About us</h1>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
        <div className="card  bg-base-100 rounded-md ">
          <figure>
            <img src={mission} className="rounded-lg image-full" alt="Shoes" />
          </figure>
        </div>
        <div className="card  bg-base-100 rounded-md ">
          <figure>
            <img src={vision} className="rounded-lg" alt="Shoes" />
          </figure>
        </div>
      </div>

      <p className="my-6 px-10">
        FixHealth is an online medical service targeting emerging markets that
        are rapidly digitising. Our mission is to improve the health and
        wellbeing of the populations we serve.
      </p>
    </div>
  );
};

export default About;
