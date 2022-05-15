import React, { useState } from 'react';
import shortId from 'shortid';

import s from '../scss/Filters.module.scss';

const Filters = React.memo(function Filters({ onClickItem, items }) {
  const [category, setCategory] = useState(null);

  const onSelectCategory = (index) => {
    setCategory(index);
    onClickItem(index);
  };

  return (
    <div className={s.wrapper}>
      <ul className={s.btns}>
        <li
          key={shortId.generate()}
          onClick={() => onSelectCategory(null)}
          className={
            category === null ? [s.btn, s.activeBtnFilter].join(' ') : s.btn
          }>
          Все
        </li>
        {items &&
          items.map((neme, index) => (
            <li
              key={shortId.generate()}
              onClick={() => onSelectCategory(index)}
              className={
                category === index
                  ? [s.btn, s.activeBtnFilter].join(' ')
                  : s.btn
              }>
              {neme}
            </li>
          ))}
      </ul>
    </div>
  );
});

export default Filters;
