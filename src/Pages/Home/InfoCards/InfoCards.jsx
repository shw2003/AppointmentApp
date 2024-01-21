import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard/InfoCard";

const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 8.00 am to 9.00pm everyday",
      icon: clock,
      bgClass: "bg-cyan-400",
    },

    {
      id: 2,
      name: "Contact Us",
      description: "+91-960-778-8208, 1800-890-2102",
      icon: phone,
      bgClass: "bg-gradient-to-r from-primary to-secondary",
    },
  ];

  return (
    <div className="">
      <div className="grid px-5 mt-8 gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {cardData.map((card) => (
          <InfoCard key={card.id} card={card}></InfoCard>
        ))}
      </div>
    </div>
  );
};

export default InfoCards;
