import React from "react";
import Banner from "./Banner/Banner";
import InfoCards from "./InfoCards/InfoCards";
import Treatment from "./Treatment/Treatment";
import MakeAppointment from "./MakeAppointment/MakeAppointment";
import Testimonial from "./Testimonial/Testimonial";
import Contact from "./Contact/Contact";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <InfoCards></InfoCards>
      <Treatment></Treatment>
      <MakeAppointment></MakeAppointment>
      <Testimonial></Testimonial>
      <Contact></Contact>
    </div>
  );
};

export default Home;
