import React from 'react';
import sofa from '../../assets/errors/4043.png';
import { Link } from 'react-router-dom';

const Servererror = () => {
  return (
    <div className="error">
      <spen className="pageerror">500</spen>
      <spen className="textpageerror">SERVER ERROR</spen>
      <img src={sofa} alt="sofa img" />
      <Link to="/" className="goback">
        <strong>&#10232;</strong> GO BACK
      </Link>
    </div>
  );
};

export default Servererror;
