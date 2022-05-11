import React from 'react';

import { Filters, Content } from '../components';

export const Home = () => {
  return (
    <div className="wrapper">
      <Filters />
      <Content />
    </div>
  );
};
