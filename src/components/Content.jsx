import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shortId from 'shortid';

import { PizzaCart } from './pizzaCart';
import { PlaceholderPizzaCart } from './pizzaCart/PlaceholderPizzaCart';
import s from '../scss/Content.module.scss';

import { addPizzaToCart } from '../redux/actions/cart';

const Content = ({ items }) => {
  const dispatch = useDispatch();
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const cartItems = useSelector(({ cart }) => cart.items);

  const handleAddPizzaToCart = (obj) => {
    dispatch(addPizzaToCart(obj));
  };

  return (
    <div className={s.wrapper}>
      <h2 className={s.title}>Все пиццы</h2>

      <ul className={s.list}>
        {isLoaded
          ? items.map((obj) => (
              <li key={shortId.generate()} className={s.item}>
                <PizzaCart
                  addedCount={
                    cartItems[obj.id] && cartItems[obj.id].items.length
                  }
                  onClickAddPizza={handleAddPizzaToCart}
                  {...obj}
                />
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
