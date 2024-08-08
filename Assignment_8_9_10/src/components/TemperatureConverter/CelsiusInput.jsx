const CelsiusInput = ({ value, onTemperatureChange }) => {
    const handleChange = (e) => {
      onTemperatureChange(e.target.value);
    };
  
    return (
      <div>
        
        <input type="number" value={value} onChange={handleChange} className="input input-bordered w-full max-w-xs" />
      
      </div>
    );
  };
  
  export default CelsiusInput;