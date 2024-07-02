import React from 'react';
import { useNavigate } from 'react-router-dom';
import { punamData } from '../punam/data';
import '../App.css'; 

const Punam = () => {
  const navigate = useNavigate();

  return (
    <div className="content">
      <h1>{punamData.name}</h1>
      <p>{punamData.info}</p>
      <button onClick={() => navigate('/govind')}>Go to Govind</button>
    </div>
  );
};

export default Punam;
