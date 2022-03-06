import React from 'react';
import { useSelector } from 'react-redux';
import Banner from '../Banner';
import Option from './Option';

const Options = () => {
  const { options = [], subOptions = [] } = useSelector(state => state.options);
  const { activeCategory } = useSelector(state => state.categories);

  const optionsToShow = () => { 
    return options.filter(option => option.category === activeCategory.label);
  }

  return (
    <div className="sq-options px-2">
      <Banner />
      {
        optionsToShow().map((option, index) => {
          return <Option
            key={index}
            data={option}
          />
        })
      }
    </div>
  )
}

export default Options;