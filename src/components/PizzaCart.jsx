import React, { useState } from 'react';

import s from '../scss/PizzaCart.module.scss';
import chizburger from '../images/chizburger.png';
import plus from '../images/plus.svg';
import plusOrange from '../images/plusOrange.svg';

export const PizzaCart = () => {
  const [added, setAdded] = useState(true);
  return (
    <div className={s.wrapper}>
      <img className={s.img} src={chizburger} alt="img" />
      <p className={s.name}>Chizburger-pizza</p>
      <div className={s.filterBlock}>
        <button
          type="button"
          className={[s.btnFilter, s.activeBtnFilter].join(' ')}>
          thin
        </button>
        <button type="button" className={s.btnFilter}>
          traditional
        </button>
        <button
          type="button"
          className={[s.btnFilter, s.activeBtnFilter].join(' ')}>
          26 cm.
        </button>
        <button type="button" className={s.btnFilter}>
          30 cm.
        </button>
        <button type="button" className={s.btnFilter}>
          40cm.
        </button>
      </div>
      <div className={s.lastBlock}>
        <p className={s.price}>777 ₴</p>
        <button className={[s.addBtn, s.activeAddBtn].join(' ')} type="button">
          <img className={s.plus} src={added ? plusOrange : plus} alt="plus" />
          Add
          <span className={s.count}>3</span>
        </button>
      </div>
    </div>
  );
};
