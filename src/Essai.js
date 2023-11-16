import React, { useState } from 'react';

const ControlledInput = () => {
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <p>Bonjour, {name} !</p>
    </div>
  );
};

export default ControlledInput;