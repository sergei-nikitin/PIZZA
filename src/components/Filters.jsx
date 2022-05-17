import React from 'react';
import PropTypes from 'prop-types';
import shortId from 'shortid';

import s from '../scss/Filters.module.scss';

const Filters = React.memo(function Filters({
  activeCategory,
  onClickItem,
  items,
}) {
  return (
    <div className={s.wrapper}>
      <ul className={s.btns}>
        <li
          key={shortId.generate()}
          onClick={() => onClickItem(null)}
          className={
            activeCategory === null
              ? [s.btn, s.activeBtnFilter].join(' ')
              : s.btn
          }>
          Все
        </li>
        {items &&
          items.map((neme, index) => (
            <li
              key={shortId.generate()}
              onClick={() => onClickItem(index)}
              className={
                activeCategory === index
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

Filters.propTypes = {
  activeCategory: PropTypes.number,
  onClickItem: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};
Filters.defaultProps = {
  items: [],
  activeCategory: null,
};

export default Filters;
