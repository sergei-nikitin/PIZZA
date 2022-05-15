import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';

import { setPizzas } from './redux/actions/pizzas';
import { Header, Footer } from './components';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get('http://localhost:3001/pizzas')
      .then(({ data }) => dispatch(setPizzas(data)));
  }, []);

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
