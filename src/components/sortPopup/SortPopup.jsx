import React, { useState, useEffect, useRef } from 'react';
import shortId from 'shortid';

import s from './SortPopup.module.scss';
import arrow from '../../images/arrowSortBlack.svg';

const SortPopup = React.memo(function SortPopup({
  items,
  activeSort,
  onSelectSort,
}) {
  const [popup, setPopup] = useState(false);
  const [category, setCategory] = useState('популярности');
  const [activeView, setActiveView] = useState(0);

  const popupRef = useRef();

  const onclickBody = (e) => {
    if (!e.path.includes(popupRef.current)) {
      setPopup(false);
    }
  };
  useEffect(() => {
    document.body.addEventListener('click', onclickBody);
  }, []);

  const onCliskCategory = (name, type, index) => {
    setActiveView(index);
    setCategory(name);
    tooglePopup();
    onSelectSort(type);
  };
  const tooglePopup = () => {
    setPopup(!popup);
  };

  return (
    <div ref={popupRef} className={s.sortWrapper}>
      <div className={s.sort} onClick={tooglePopup}>
        {!popup ? (
          <img className={s.arrow} src={arrow} alt="arrow" />
        ) : (
          <img
            style={{ transform: 'rotate(180deg)' }}
            className={s.arrow}
            src={arrow}
            alt="arrow"
          />
        )}

        <p className={s.title}>Сортировка по:</p>
        <p className={s.selected}>{category}</p>
        {/* popup */}
        {popup && (
          <ul className={s.popup}>
            {items.map((obj, index) => (
              <li
                key={shortId.generate()}
                onClick={() => onCliskCategory(obj.name, obj.type, index)}
                className={
                  activeView === index
                    ? [s.view, s.activeView].join(' ')
                    : [s.view]
                }>
                {obj.name}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
});

export default SortPopup;
