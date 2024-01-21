import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon } = card;
  return (
    <div
      className={`card text-white p-5 md:card-side shadow-xl bg-gradient-to-r from-cyan-500 to-cyan-800`}
    >
      <figure>
        <img src={icon} alt="icon" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default InfoCard;
