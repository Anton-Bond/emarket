import React from 'react';

import './LoadingIndicator.css';

const LoadingIndicator = () => {
  return (
    <img src={require('../assets/images/spinner.png')} alt="Loading..." className="spinner-img" />
  );
};

export default LoadingIndicator;
