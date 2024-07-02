import React from 'react';
import { useNavigate } from 'react-router-dom';
import { govindData } from '../punam/govind/data';
import '../App.css'; 

const Govind = () => {
  const navigate = useNavigate();

  return (
    <div className='content'>
      <h1>{govindData.name}</h1>
      <p>{govindData.info}</p>
      <button onClick={() => navigate('/sham')}>Go to Sham</button>
    </div>
  );
};

export default Govind;
