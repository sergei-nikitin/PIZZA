import React, { useState, useEffect, useRef } from 'react';
import shortId from 'shortid';

import s from './SortPopup.module.scss';
import arrow from '../../images/arrowSortBlack.svg';

const SortPopup = () => {
  const [popup, setPopup] = useState(false);
  const [category, setCategory] = useState('popularity');
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

  const catigories = ['popularity', 'price', 'alphabetically'];

  const onCliskCategory = (name, index) => {
    setCategory(name);
    setActiveView(index);
    tooglePopup();
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

        <p className={s.title}>Sort by:</p>
        <p className={s.selected}>{category}</p>
      </div>
      {/* popup */}
      {popup && (
        <ul className={s.popup}>
          {catigories.map((name, index) => (
            <li
              key={shortId.generate()}
              onClick={() => onCliskCategory(name, index)}
              className={
                activeView === index
                  ? [s.view, s.activeView].join(' ')
                  : [s.view]
              }>
              {name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SortPopup;
