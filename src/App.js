import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  return (
    <BrowserRouter>
      {/* <div className="wrapper"> */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
      <Footer />
      {/* </div> */}
    </BrowserRouter>
  );
}

export default App;
