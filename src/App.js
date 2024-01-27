import React from 'react';
import { Routes, Route } from 'react-router-dom';
import About from './Pages/About';
import Projects from './Pages/Projects';
import Working from './Pages/Working';
import './App.css';

function App() {
  return (
  <div>
    <Routes>
        {/* <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} /> */}
        <Route path="/" element={<Working />} />
    </Routes>
  </div>
  );
}

export default App;
