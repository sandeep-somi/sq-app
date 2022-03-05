import React from 'react';
import { useSelector } from 'react-redux';

const Banner = () => {
  const { activeCategory } = useSelector(state => state.categories);
  if (!activeCategory || !activeCategory.bannerImage) return null;

  return (
    <div className="sq-option-banner">
      <img src={activeCategory.bannerImage} alt={activeCategory.label} />
    </div>
  )
}

export default Banner;