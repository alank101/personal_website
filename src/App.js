import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { default as AboutMe } from './components/AboutMe';
import { default as HomePage } from './components/HomePage';
import { default as Music } from './components/Music';
import { default as Development } from './components/Development';
import { default as Header} from './components/Header'

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path='AboutMe' element={<AboutMe />} />
        <Route path="/Music" element={<Music />} />
        <Route path='/Development' element={<Development />} />
      </Routes>
    </div>
  );
}

export default App;
