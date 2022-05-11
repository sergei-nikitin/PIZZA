import React, { useState } from 'react';
import shortId from 'shortid';

import s from '../scss/Filters.module.scss';
import arrow from '../images/arrowSortBlack.svg';

export const Filters = () => {
  const [category, setCategory] = useState(null);
  const categoryNames = ['Meat', 'Vegetarian', 'Grill', 'Spicy', 'Cloced'];

  return (
    <div className={s.wrapper}>
      <ul className={s.btns}>
        <li
          key={shortId.generate()}
          onClick={() => setCategory(null)}
          className={
            category === null ? [s.btn, s.activeBtnFilter].join(' ') : s.btn
          }>
          All
        </li>
        {categoryNames &&
          categoryNames.map((neme, index) => (
            <li
              key={shortId.generate()}
              onClick={() => setCategory(index)}
              className={
                category === index
                  ? [s.btn, s.activeBtnFilter].join(' ')
                  : s.btn
              }>
              {neme}
            </li>
          ))}
      </ul>
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
