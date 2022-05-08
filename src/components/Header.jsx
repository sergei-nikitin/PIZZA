import React from 'react';

import logo from '../images/logo.svg';
import cart from '../images/cart.svg';
import s from '../scss/Header.module.scss';

export const Header = () => {
  return (
    <header className={s.header}>
      <a href="#" className={s.logoWrapper}>
        <img className={s.logo} src={logo} alt="logo" />
        <div className={s.logoDescr}>
          <h3 className={s.logoTitle}>pizza</h3>
          <p className={s.logoText}>study project</p>
        </div>
      </a>

      <a href="#" className={s.cartLink}>
        <p className={s.price}>400 ₴</p>
        <span className={s.cartSpan}>|</span>
        <img className={s.cart} src={cart} alt="cart" />
        <span className={s.count}>6</span>
      </a>
    </header>
  );
};
