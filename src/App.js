import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Error404 from './pages/Error404';
import Home from './pages/Home';
import House from './pages/House';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error404 />} />
          <Route path="/house/:id" element={<House />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;