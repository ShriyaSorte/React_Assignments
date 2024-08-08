import { useState } from 'react';
import CelsiusInput from './CelsiusInput';
import FahrenheitInput from './FahrenheitInput';

const TemperatureConverter = () => {
  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value) => {
    setCelsius(value);
    if (value === '') {
      setFahrenheit('');
    } else {
      setFahrenheit((parseFloat(value) * 9/5 + 32).toFixed(2));
    }
  };

  const handleFahrenheitChange = (value) => {
    setFahrenheit(value);
    if (value === '') {
      setCelsius('');
    } else {
      setCelsius(((parseFloat(value) - 32) * 5/9).toFixed(2));
    }
  };

  return (
    <div>
    

<div className="hero bg-base-100 ">
  <div className="hero-content flex-col lg:flex-row-reverse">
   
    <div className="card bg-black w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body">
        <h1 className='text-white text-2xl'>Temperature Controller</h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Celsius</span>
          </label>
         
          <CelsiusInput value={celsius} onTemperatureChange={handleCelsiusChange} />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Fahrenheit</span>
          </label>
          <FahrenheitInput value={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
         
        </div>
        
      </form>
    </div>
  </div>
</div>

    </div>
  );
};

export default TemperatureConverter;