import React from 'react';

const Ad = ({ displayAd }) => {
  if (!displayAd) {
    return null;
  }

  return (
    <div>
      <img
        src="/img/movieAd.png"
        alt="Advertisement"
        style={{ width: '100%', maxWidth: '500px' }}
      />
    </div>
  );
};

export default Ad;
