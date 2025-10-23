import React from 'react';
import { usePreloader } from '../hooks/usePreloader';

const Preloader = () => {
  usePreloader();

  return (
    <div id="preloader">
      <div id="loader" className="dots-fade">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Preloader;
