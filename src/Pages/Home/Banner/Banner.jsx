import React, { useState } from "react";
import Picture from "../../../../src/assets/picture.png";
import "./Banner.css";
import Modal from "react-modal";
import StepOne from "../../step/StepOne";
import StepTwo from "../../step/StepTwo";
import StepThree from "../../step/StepThree";
import MultiStepForm from "../../mutilStepFrom/MultiStepForm";

const Banner = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const steps = [
    { name: "Name", component: <StepOne /> },
    { name: "Email", component: <StepTwo /> },
    { name: "Password", component: <StepThree /> },
  ];

  return (
    <div className="hero py-5">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={Picture}
          className="rounded-lg lg:w-1/2 md:w-full shadow-2xl"
          alt=""
        />
        <div className="lg:px-5 md:px-5 text-justify">
          <h1 className="font-bold">Hello We Are</h1>
          <h1 className="text-4xl text-cyan-500 pt-1 font-bold pb-5">
            Fix Health
          </h1>
          <p>
            Fix Health (YourPhysio previously) was started by Dr. Sheetal
            Mundhada who's a renowned physiotherapist with 33+ years of
            experience. The team has 60+ physiotherapists & has delivered
            30,000+ online sessions with 96% patient satisfaction.
          </p>

          <div className="my-5 text-center font-bold flex gap-2">
            <button
              className="btn normal-case btn-outline text-cyan-500 hover:bg-cyan-600 rounded-full"
              onClick={() => setIsOpen(true)}
            >
              <span className="ml-2">Book Now</span>
            </button>
          </div>

          <div>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={() => setIsOpen(false)}
              style={{ fontSize: "20px" }}
            >
              <div className="form">
                <h1>Form</h1>
                <button
                  style={{ float: "right", color: "red" }}
                  onClick={() => setIsOpen(false)}
                >
                  Close
                </button>
              </div>

              <MultiStepForm />
            </Modal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
