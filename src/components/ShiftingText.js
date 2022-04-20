import React from "react";
import "./ShiftingText.css";

const ShiftingText = ({ arr }) => {
  return (
    <div className="container">
      <div className="naslov">{arr.naslov}</div>
      <div className="container2">
        <div className="upcomingEvent">UPCOMING EVENT</div>
        <div className="date">{arr.date}</div>
        <div className="description">{arr.description} </div>
        <button onClick={() => console.log("Book Now")} className="btn">
          Book Now
        </button>
        <button className="btn2" onClick={() => console.log("See All Visits")}>
          See All Visits
        </button>
      </div>
    </div>
  );
};

export default ShiftingText;
