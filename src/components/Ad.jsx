import React from "react";

const Ad = ({ show }) => {
  return show ? (
    <img src="./movieAd.png" alt="Ad" style={{ width: "100%" }} />
  ) : null;
};

export default Ad;
