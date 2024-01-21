import React from "react";
import treatment from "../../../assets/images/doctor.png";

const Treatment = () => {
  return (
    <div className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-600 ">
      <div className="my-5 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 justify-items-center container px-3  ">
        <div className="text-center">
          <h1 className="text-3xl justify-start pt-5 pb-5 font-bold">
            What Kind Of
            <br />
            Treatment I Provide.
          </h1>
          <div className="avatar">
            <div className="w-44 mask mask-hexagon">
              <img src={treatment} alt="treatment" />
            </div>
          </div>
        </div>

        <div>
          <div
            tabIndex={0}
            className="collapse my-5 collapse-plus border border-cyan-700 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              I ant to know More About Fix Health
            </div>
            <div className="collapse-content">
              <p tabIndex={0}>
                Fix Health (YourPhysio previously) was started by Dr. Sheetal
                Mundhada who's a renowned physiotherapist with 33+ years of
                experience. The team has 60+ physiotherapists & has delivered
                30,000+ online sessions with 96% patient satisfaction. The
                organization has been featured in Economic Times, Business
                World, Times of India for its effective online pain relief
                programs. Fix Health shares the same investors as companies like
                Ola, Snapdeal & Khatabook and the technology innovation is done
                by a team from IIT Bombay, IIT Madras & BITS Pilani.
              </p>
            </div>
          </div>

          <div
            tabIndex={1}
            className="collapse collapse-plus border border-cyan-700 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              What will happen in the consultation?
            </div>
            <div className="collapse-content">
              <p tabIndex={1}>
                You will need to be prepared with the following requirements
                before the consultation starts: Share relevant medical documents
                & test reports on WhatsApp. Zoom link for the session will be
                shared 1 hour before the consultation Connect Zoom via mobile or
                laptop Sit in a silent place with open space around (4ft x 4 ft)
                & good internet connection
              </p>
            </div>
          </div>

          <div
            tabIndex={2}
            className="collapse my-5 collapse-plus border border-cyan-700 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Why is the consultation Free?
            </div>
            <div className="collapse-content">
              <p tabIndex={2}>
                Our approach is new and we want you to experience it first
                before starting the treatment. Hence, the detailed consultation
                is FREE Having said this, our approach has proven to work. Our
                online pain relief & recovery program is research-backed &
                published in the International Journal of Physiotherapy. Link to
                the research paper. We are passionate about helping as many
                people recover from joint and back pain as possible.
              </p>
            </div>
          </div>
          <div
            tabIndex={3}
            className="collapse my-5 collapse-plus border border-cyan-700 rounded-box"
          >
            <div className="collapse-title text-xl font-medium">
              Where will the consoltation happen?
            </div>
            <div className="collapse-content">
              <p tabIndex={3}>
                The consultation will happen online over Zoom video call. It is
                important that you are in a quite room and appropriately dressed
                for our physiotherapists to carry out the consultation properly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Treatment;
