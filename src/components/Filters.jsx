import React, { useState } from 'react';
import shortId from 'shortid';

import s from '../scss/Filters.module.scss';
import SortPopup from './sortPopup/SortPopup';

const Filters = () => {
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

      <SortPopup />
    </div>
  );
};

export default Filters;
