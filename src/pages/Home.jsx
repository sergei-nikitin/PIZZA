import React from 'react';

import { Filters, Content } from '../components';

export const Home = ({ items }) => {
  return (
    <div className="wrapper">
      <Filters />
      <Content items={items} />
    </div>
  );
};
