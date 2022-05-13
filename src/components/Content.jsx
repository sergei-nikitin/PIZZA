import React from 'react';
import shortId from 'shortid';

import { PizzaCart } from './PizzaCart';
import s from '../scss/Content.module.scss';

const Content = ({ items }) => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Все пиццы</h2>

      <ul className={s.list}>
        {items
          ? items.map((obj) => (
              <li key={shortId.generate()} className={s.item}>
                <PizzaCart {...obj} />
              </li>
            ))
          : console.log('false')}
      </ul>
    </div>
  );
};

export default Content;
