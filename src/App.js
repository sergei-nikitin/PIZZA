import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// import { useDispatch } from 'react-redux';

import { Header, Footer } from './components';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  // const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
