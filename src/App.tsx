import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { AboutUs } from './pages/aboutUs';
import { Product } from './pages/product';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
