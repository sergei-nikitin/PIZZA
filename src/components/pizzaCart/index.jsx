import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import shortId from 'shortid';

import s from '../../scss/PizzaCart.module.scss';
import { PlaceholderPizzaCart } from './PlaceholderPizzaCart';

export const PizzaCart = ({
  id,
  imageUrl,
  name,
  price,
  types,
  sizes,
  category,
  rating,
  isLoading,
  onClickAddPizza,
  addedCount,
}) => {
  const availableTypes = ['тонкое', 'традиционное'];
  const availableSizes = [26, 30, 40];

  // const [added, setAdded] = useState(true);
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
  const onAddPizza = () => {
    const obj = {
      id,
      imageUrl,
      name,
      type: availableTypes[activeType],
      size: availableSizes[activeSize],
      category,
      price,
    };
    onClickAddPizza(obj);
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
        <button onClick={onAddPizza} className={s.addBtn} type="button">
          <svg
            className={s.plus}
            width="12"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8 4.8H7.2V1.2a1.2 1.2 0 0 0-2.4 0v3.6H1.2a1.2 1.2 0 0 0 0 2.4h3.6v3.6a1.2 1.2 0 0 0 2.4 0V7.2h3.6a1.2 1.2 0 0 0 0-2.4Z"
              fill="#EB5A1E"
            />
          </svg>
          Добавить
          {addedCount && <span className={s.count}>{addedCount}</span>}
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
  onClickAddPizza: PropTypes.func,
  addedCount: PropTypes.number,
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
