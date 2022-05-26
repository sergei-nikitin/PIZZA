import React from 'react';

import s from '../scss/CartItem.module.scss';
import minus from '../images/minus.svg';
import plus from '../images/plusBig.svg';
import clear from '../images/clear.svg';

const CartItem = ({
  id,
  name,
  type,
  price,
  size,
  imageUrl,
  totalPrice,
  totalCount,
  removeItem,
  plusItem,
  minusItem,
}) => {
  const handleRemoveClick = () => {
    removeItem(id);
  };
  const handlePlusItemClick = () => {
    plusItem(id);
  };
  const handleMinusItemClick = () => {
    minusItem(id);
  };

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
        <button onClick={handleMinusItemClick} className={s.btn} type="button">
          <img src={minus} alt="img" />
        </button>
        <span>{totalCount}</span>
        <button onClick={handlePlusItemClick} className={s.btn} type="button">
          <img src={plus} alt="img" />
        </button>
      </div>
      <div className={s.priceBlock}>
        <p>{totalPrice} ₴</p>
        <button onClick={handleRemoveClick} type="button">
          <img src={clear} alt="img" />
        </button>
      </div>
    </div>
  );
};

export default CartItem;
