import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Filters, Content } from '../components';
import { setCategory } from '../redux/actions/filters';
import SortPopup from '../components/sortPopup/SortPopup';
import s from '../scss/Home.module.scss';

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortItems = [
  { name: 'популярности', type: 'popular' },
  { name: 'цене', type: 'price' },
  { name: 'по алфавиту', type: 'alphabet' },
];

export const Home = () => {
  const dispatch = useDispatch();

  const onSelectCategiry = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const items = useSelector(({ pizzas }) => pizzas.items);

  return (
    <div className="wrapper">
      <div className={s.filtersWrapper}>
        <Filters onClickItem={onSelectCategiry} items={categoryNames} />
        <SortPopup items={sortItems} />
      </div>
      <Content items={items} />
    </div>
  );
};
