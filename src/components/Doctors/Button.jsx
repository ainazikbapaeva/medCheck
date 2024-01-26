import React, { useState } from "react";

const Buttonclick = ({ label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const myStyle = {
    width: "204px",
    height: "42px",
    border: "2px solid #027b44",
    padding: "10px 20px",
    borderRadius: "15px",
    background: "white",
    color: "#027b44",
    transition: "all ease .2s",
    backgroundColor: isHovered ? "#027b44" : "white",
    color: isHovered ? "white" : "#027b44",
    width: isHovered ? "210px" : "204px",
    height: isHovered ? "45px" : "42px",
  };

  return (
    <button
      style={myStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {label}
    </button>
  );
};

export default Buttonclick;