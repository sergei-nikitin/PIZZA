import React from 'react';

import s from '../scss/CartItem.module.scss';
import img from '../images/sair.png';
import minus from '../images/minus.svg';
import plus from '../images/plusBig.svg';
import clear from '../images/clear.svg';

const CartItem = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.descrBlock}>
        <img src={img} alt="img" />
        <div>
          <p className={s.name}>name</p>
          <p className={s.descr}>thin, 26cm </p>
        </div>
      </div>
      <div className={s.countBlock}>
        <button className={s.btn} type="button">
          <img src={minus} alt="img" />
        </button>
        <span>2</span>
        <button className={s.btn} type="button">
          <img src={plus} alt="img" />
        </button>
      </div>
      <div className={s.priceBlock}>
        <p>700 ₴</p>
        <button type="button">
          <img src={clear} alt={img} />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
