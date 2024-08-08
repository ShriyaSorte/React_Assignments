import React from 'react';

const FahrenheitInput = ({ value, onTemperatureChange }) => {
  const handleChange = (e) => {
    onTemperatureChange(e.target.value);
  };

  return (
    <div>
      
      <input type="number" value={value} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
    </div>
  );
};

export default FahrenheitInput;