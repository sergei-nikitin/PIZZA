import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Filters, Content } from '../components';
import { setCategory, setSortBy } from '../redux/actions/filters';
import SortPopup from '../components/sortPopup/SortPopup';
import { fetchPizzas } from '../redux/actions/pizzas';
import s from '../scss/Home.module.scss';

const categoryNames = [
  'Мясные',
  'Вегетарианские',
  'Гриль',
  'Острые',
  'Закрытые',
];
const sortItems = [
  { name: 'популярности', type: 'rating', order: 'desc' },
  { name: 'цене', type: 'price', order: 'desc' },
  { name: 'по алфавиту', type: 'name', order: 'asc' },
];

export const Home = () => {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const { category, sortBy } = useSelector(({ filters }) => filters);
  console.log(sortBy);

  React.useEffect(() => {
    dispatch(fetchPizzas(sortBy, category));
  }, [category, sortBy]);

  const onSelectCategiry = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);
  const onSelectSort = React.useCallback((type) => {
    dispatch(setSortBy(type));
  }, []);

  return (
    <div className="wrapper">
      <div className={s.filtersWrapper}>
        <Filters
          onClickItem={onSelectCategiry}
          items={categoryNames}
          activeCategory={category}
        />
        <SortPopup
          items={sortItems}
          activeSort={sortBy.type}
          onSelectSort={onSelectSort}
        />
      </div>
      <Content items={items} />
    </div>
  );
};
