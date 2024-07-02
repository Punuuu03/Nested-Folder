import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Punam from './components/Punam';
import Govind from './components/Govind';
import Sham from './components/Sham';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/punam" element={<Punam />} />
        <Route path="/govind" element={<Govind />} />
        <Route path="/sham" element={<Sham />} />
      </Routes>
    </Router>
  );
}

export default App;
