import React, { useState } from 'react';

const ControlledInput = () => {
  const [name, setName] = useState('');
  const [surName, setSurName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      
      
      <p>Bonjour, {name}, {surName} !</p>
    </div>
  );
};

export default ControlledInput;