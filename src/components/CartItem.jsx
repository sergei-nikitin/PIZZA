import React from 'react';

import s from '../scss/CartItem.module.scss';
import minus from '../images/minus.svg';
import plus from '../images/plusBig.svg';
import clear from '../images/clear.svg';

const CartItem = ({
  name,
  type,
  price,
  size,
  imageUrl,
  totalPrice,
  totalCount,
}) => {
  return (
    <div className={s.wrapper}>
      <div className={s.descrBlock}>
        <img src={imageUrl} alt="img" />
        <div>
          <p className={s.name}>{name}</p>
          <p className={s.descr}>
            {type}, {size}cm
          </p>
        </div>
      </div>
      <div className={s.countBlock}>
        <button className={s.btn} type="button">
          <img src={minus} alt="img" />
        </button>
        <span>{totalCount}</span>
        <button className={s.btn} type="button">
          <img src={plus} alt="img" />
        </button>
      </div>
      <div className={s.priceBlock}>
        <p>{totalPrice} ₴</p>
        <button type="button">
          <img src={clear} alt="img" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
