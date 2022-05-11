import React from 'react';
import { Link } from 'react-router-dom';

import s from '../scss/Cart.module.scss';
import img from '../images/emptyCart.png';
import back from '../images/back.svg';

const EmptyCart = () => {
  return (
    <div className={s.cartWrapper}>
      <h1 className={s.title}>Cart is empty</h1>
      <p className={s.text}>You probably haven't ordered pizza yet.</p>
      <p className={s.text}>To order pizza, go to the main page.</p>
      <img className={s.img} src={img} alt="img" />
      <Link className={s.link} to="/">
        <img src={back} alt="img" />
        Go back
      </Link>
    </div>
  );
};

export default EmptyCart;
