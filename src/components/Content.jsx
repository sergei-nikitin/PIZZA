import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortId from 'shortid';

import { PizzaCart } from './pizzaCart';
import { PlaceholderPizzaCart } from './pizzaCart/PlaceholderPizzaCart';
import s from '../scss/Content.module.scss';

const Content = ({ items }) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Все пиццы</h2>

      <ul className={s.list}>
        {isLoaded
          ? items.map((obj) => (
              <li key={shortId.generate()} className={s.item}>
                <PizzaCart {...obj} />
              </li>
            ))
          : Array(10)
              .fill(0)
              .map((_, index) => (
                <PlaceholderPizzaCart
                  key={index}
                  className="placeholderPizza"
                />
              ))}
      </ul>
    </div>
  );
};

export default Content;
