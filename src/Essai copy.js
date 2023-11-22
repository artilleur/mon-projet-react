import React, { useState } from 'react';

const ControlledInput = () => {
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');

  const handleChange = (event) => {
    setNom(event.target.value);
  };
  const handleChange2 = (event) => {
    setPrenom(event.target.value);
  };

  return (
    <div>
      <input type="text" value={nom} onChange={handleChange} />
      <input type="text" value={prenom} onChange={handleChange2} />

      <p>Bonjour, {prenom}, {nom} !</p>



    </div>
  );
};

export default ControlledInput;