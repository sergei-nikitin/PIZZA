import React from 'react';

import { Filters } from '../components/Filters';
import { Content } from '../components/Content';

export const Home = () => {
  return (
    <div className="wrapper">
      <Filters />
      <Content />
    </div>
  );
};
