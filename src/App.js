import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';

import { Header, Footer } from './components';
import { Home } from './pages/Home';
import { Cart } from './pages/Cart';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:3000/db.json')
      .then(({ data }) => setData(data.pizzas));
    // fetch('http://localhost:3000/db.json')
    //   .then((res) => res.json())
    //   .then((res) => setData(res.pizzas));
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home items={data} />} />
        <Route path="/" render={() => <Home items={data} />} />
        <Route path="/card" element={<Cart />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
