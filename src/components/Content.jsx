import React from 'react';
import shortId from 'shortid';

import { PizzaCart } from './PizzaCart';
import s from '../scss/Content.module.scss';

const Content = () => {
  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>All pizzas</h2>

      <ul className={s.list}>
        <li key={shortId.generate()} className={s.item}>
          <PizzaCart />
        </li>
        <li key={shortId.generate()} className={s.item}>
          <PizzaCart />
        </li>
        <li key={shortId.generate()} className={s.item}>
          <PizzaCart />
        </li>
        <li key={shortId.generate()} className={s.item}>
          <PizzaCart />
        </li>
      </ul>
    </div>
  );
};

export default Content;
