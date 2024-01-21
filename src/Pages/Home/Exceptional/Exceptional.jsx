import React from "react";
import exceptional from "../../../assets/images/Exceptional.png";

const Exceptional = () => {
  return (
    <div>
      <div className="text-center">
        <h1 className="text-3xl text-cyan-500 font-bold mt-5 mb-2">
          Exceptional Service Care.
        </h1>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4 justify-items-center py-14 px-5">
        <figure className="lg:pl-10 md:pl-10">
          <img src={exceptional} alt="Shoes" className="rounded-xl w-96" />
        </figure>

        <div className="mt-5">
          <h1 className="text-3xl text-justify text-black py-3">
            {" "}
            Exceptional Service Care, on Your Terms
          </h1>

          <div className="pl-5 py-5">
            {/* <button className="btn btn-active text-center btn-primary">Get Started</button> */}
            <button
              className="bg-cyan-500 hover:bg-cyan-700 text-white font-bold py-2 px-4 border border-cyan-700 rounded"
              href="/"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
