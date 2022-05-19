import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../images/logo.svg';
import cart from '../images/cart.svg';
import s from '../scss/Header.module.scss';
import { useSelector } from 'react-redux';

const Header = () => {
  const { totalPrice, totalCount } = useSelector(({ cart }) => cart);
  // const { totalPrice, totalCount } = useSelector(({ cart }) => ({
  //   totalPrice: cart.totalPrice,
  //   totalCount: cart.totalCount,
  // }));
  return (
    <header className={s.header}>
      <Link to="/" className={s.logoWrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <div className={s.logoDescr}>
          <h3 className={s.logoTitle}>pizza</h3>
          <p className={s.logoText}>study project</p>
        </div>
      </Link>

      <Link to="/card" className={s.cartLink}>
        <p className={s.price}>{totalPrice} ₴</p>
        <span className={s.cartSpan}>|</span>
        <img className={s.cart} src={cart} alt="cart" />
        <span className={s.count}>{totalCount}</span>
      </Link>
    </header>
  );
};

export default Header;
