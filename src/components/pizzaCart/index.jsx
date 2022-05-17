import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortId from 'shortid';

import s from '../../scss/PizzaCart.module.scss';
import plus from '../../images/plus.svg';
import plusOrange from '../../images/plusOrange.svg';
import { PlaceholderPizzaCart } from './PlaceholderPizzaCart';

export const PizzaCart = ({
  id,
  imageUrl,
  name,
  types,
  sizes,
  price,
  category,
  rating,
  isLoading,
}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  const [added, setAdded] = useState(true);
  const [activeType, setActiveType] = useState(types[0]);
  const [activeSize, setActiveSize] = useState(0);

  if (isLoading) {
    return <PlaceholderPizzaCart />;
  }

  const onSelectType = (index) => {
    setActiveType(index);
  };
  const onSelectSize = (index) => {
    setActiveSize(index);
  };

  return (
    <div className={s.wrapper} id={id}>
      <img className={s.img} src={imageUrl} alt="img" />
      <p className={s.name}>{name}</p>
      <div className={s.filterBlock}>
        <ul className={s.typesList}>
          {availableTypes.map((item, index) => (
            <li
              key={shortId.generate()}
              onClick={() => onSelectType(index)}
              className={classNames({
                activeType: activeType === index,
                disabledType: !types.includes(index),
              })}>
              {item}
            </li>
          ))}
        </ul>
        <ul className={s.typesList}>
          {availableSizes.map((size, index) => (
            <li
              key={shortId.generate()}
              onClick={() => onSelectSize(index)}
              className={classNames({
                activeType: activeSize === index,
                disabledType: !sizes.includes(size),
              })}>
              {size} см.
            </li>
          ))}
        </ul>
      </div>
      <div className={s.lastBlock}>
        <p className={s.price}>{price} ₴</p>
        <button className={[s.addBtn, s.activeAddBtn].join(' ')} type="button">
          <img className={s.plus} src={added ? plusOrange : plus} alt="plus" />
          Добавить
          <span className={s.count}>3</span>
        </button>
      </div>
    </div>
  );
};

PizzaCart.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string.isRequired,
  types: PropTypes.arrayOf(PropTypes.number).isRequired,
  sizes: PropTypes.arrayOf(PropTypes.number).isRequired,
  isLoading: PropTypes.bool,
};
PizzaCart.defaultProps = {
  types: [],
  sizes: [],
  name: '___',
  price: null,
  imageUrl:
    'https://previews.123rf.com/images/canbedone/canbedone1812/canbedone181200123/126938162-pizza-slice-cartoon-funny-sunglasses-rock-isolated-on-white.jpg',
  isLoading: false,
};
