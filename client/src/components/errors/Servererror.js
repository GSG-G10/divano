import React from "react";
import sofa from "../../assets/errors/4043.png";

const Servererror = () => {
  return (
    <div className="error">
      <spen className="pageerror">500</spen>
      <spen className="textpageerror">SERVER ERROR</spen>
      <img src={sofa} alt="sofa img" />
      <p className="goback">
        <strong>&#10232;</strong> GO BACK
      </p>
    </div>
  );
};

export default Servererror;
