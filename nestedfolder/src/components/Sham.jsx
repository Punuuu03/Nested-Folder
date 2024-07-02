import React from 'react';
import { useNavigate } from 'react-router-dom';
import { shamData } from '../punam/govind/sham/data'; 

const Sham = () => {
  const navigate = useNavigate();

  return (
    <div className='content'>
      <h1>{shamData.name}</h1>
      <p>{shamData.info}</p>
      <button onClick={() => navigate('/punam')}>Go to Punam</button>
    </div>
  );
};

export default Sham;
