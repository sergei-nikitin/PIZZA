import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shortId from 'shortid';

import { CartItem } from '../components/CartItem';
import s from '../scss/Cart.module.scss';
import img from '../images/emptyCart.png';
import cart from '../images/cartBig.svg';
import back from '../images/back.svg';
import del from '../images/del.svg';

export const Cart = () => {
  const [items, setItems] = useState([]);
  return (
    <div className={s.cartWrapper}>
      <div className={s.upperBlock}>
        <h1 className={s.title}>
          <img src={cart} alt={img} />
          Cart
        </h1>
        <p className={s.text}>
          <img src={del} alt="img" />
          clear shopping cart
        </p>
      </div>
      <ul className={s.list}>
        <li key={shortId.generate()}>
          <CartItem />
        </li>
      </ul>
      <biv className={s.lowerBlock}>
        <div className={s.info}>
          <p className={s.count}>
            Total pizzas: <span>3 pcs</span>
          </p>
          <p className={s.price}>
            Order price: <span className={s.spanPrice}>777 ₴</span>
          </p>
        </div>
        <div className={s.btns}>
          <Link className={s.link} to="/">
            <img src={back} alt="img" />
            Go back
          </Link>
          <button type="button">Send order</button>
        </div>
      </biv>
    </div>
    // <div className={s.cartWrapper}>
    //   <h1 className={s.title}>Cart is empty</h1>
    //   <p className={s.text}>You probably haven't ordered pizza yet.</p>
    //   <p className={s.text}>To order pizza, go to the main page.</p>
    //   <img className={s.img} src={img} alt="img" />
    //   <Link className={s.link} to="/">
    //  <img src={back} alt="img" />
    //     Go back
    //   </Link>
    // </div>
  );
};
