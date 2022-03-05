import classNames from 'classnames';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveCategory } from '../../../store/categories';

const Menu = () => {
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector(state => state.categories);
  
  return (
    <div className="sq-menu d-flex flex-column align-items-end">
      {categories.map((category, index) => {
        const { label, icon } = category;
        const isActive = activeCategory && activeCategory.label === label;

        return (
          <div
            key={index}
            className={classNames("sq-menu__item", { "sq-menu__item-active": isActive })}
            onClick={() => dispatch(setActiveCategory(category))}
          >
            <img src={icon} alt={label} />
            <span>{label}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Menu;