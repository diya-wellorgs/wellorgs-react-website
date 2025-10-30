import React from 'react';

const GradientText = ({ text }) => {
  return (
    <h2 className="text-6xl  font-bold text-center text-transparent bg-clip-text text-gradient">
      {text}
    </h2>
  );
};

export default GradientText;
