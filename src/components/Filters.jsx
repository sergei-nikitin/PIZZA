import React from 'react';

import s from '../scss/Filters.module.scss';
import arrow from '../images/arrowSortBlack.svg';

export const Filters = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.btns}>
        <button className={[s.btn, s.activeBtnFilter].join(' ')}>All</button>
        <button className={s.btn}>Meat</button>
        <button className={s.btn}>Vegetarian</button>
        <button className={s.btn}>Grill</button>
        <button className={s.btn}>Spicy</button>
        <button className={s.btn}>Cloced</button>
      </div>
      {/* sort popap */}
      <div className={s.sortWrapper}>
        <div className={s.sort}>
          <img className={s.arrow} src={arrow} alt="arrow" />
          <p className={s.title}>Sort by:</p>
          <p className={s.selected}>popularity</p>
        </div>
        {/* popup */}
        <ul className={s.popup}>
          <li className={[s.view, s.activeView].join(' ')}>popularity</li>
          <li className={s.view}>price</li>
          <li className={s.view}>alphabetically</li>
        </ul>
      </div>
    </div>
  );
};
