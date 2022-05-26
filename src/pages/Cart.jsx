import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shortId from 'shortid';

import { CartItem, EmptyCart } from '../components';
import s from '../scss/Cart.module.scss';
import img from '../images/emptyCart.png';
import cart from '../images/cartBig.svg';
import back from '../images/back.svg';
import del from '../images/del.svg';
import { useSelector, useDispatch } from 'react-redux';
import {
  clearCart,
  removeCartItem,
  plusCartItem,
  minusCartItem,
} from '../redux/actions/cart';

export const Cart = () => {
  const dispatch = useDispatch();
  const { totalPrice, totalCount, items } = useSelector(({ cart }) => cart);

  const addedPizzas = Object.keys(items).map((key) => {
    return items[key].items[0];
  });

  const onClearCart = () => {
    if (window.confirm('Are you sure you want to empty the trash?')) {
      dispatch(clearCart());
    }
  };

  const onRemoveCartItem = (id) => {
    dispatch(removeCartItem(id));
  };
  const onPlusCartItem = (id) => {
    dispatch(plusCartItem(id));
  };
  const onMinusCartItem = (id) => {
    dispatch(minusCartItem(id));
  };

  return (
    <>
      {totalCount ? (
        <div className={s.cartWrapper}>
          <div className={s.upperBlock}>
            <h1 className={s.title}>
              <img src={cart} alt={img} />
              Cart
            </h1>
            <p className={s.text} onClick={onClearCart}>
              <img src={del} alt="img" />
              clear shopping cart
            </p>
          </div>
          <ul className={s.list}>
            {addedPizzas.map((obj) => (
              <li key={shortId.generate()}>
                <CartItem
                  id={obj.id}
                  name={obj.name}
                  type={obj.type}
                  size={obj.size}
                  price={obj.price}
                  totalPrice={items[obj.id].totalPrice}
                  totalCount={items[obj.id].items.length}
                  imageUrl={obj.imageUrl}
                  removeItem={onRemoveCartItem}
                  plusItem={onPlusCartItem}
                  minusItem={onMinusCartItem}
                />
              </li>
            ))}
          </ul>
          <div className={s.lowerBlock}>
            <div className={s.info}>
              <p className={s.count}>
                Total pizzas: <span>{totalCount} pcs</span>
              </p>
              <p className={s.price}>
                Order price: <span className={s.spanPrice}>{totalPrice} ₴</span>
              </p>
            </div>
            <div className={s.btns}>
              <Link className={s.link} to="/">
                <img src={back} alt="img" />
                Go back
              </Link>
              <button type="button">Send order</button>
            </div>
          </div>
        </div>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};
