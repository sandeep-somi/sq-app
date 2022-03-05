import React from 'react';
import { useDispatch } from 'react-redux';
import Header from '../containers/Common/Header/Header';
import Routes from '../routes';
import { setActiveCategory, setCategories } from '../store/categories';
import { setOptions, setSubOptions } from '../store/options';
import { setPaymentMethods } from '../store/paymentMethods';

function extractCategories(data) {
  const categories = [];
  Object.keys(data).forEach((key) => {
    categories.push({
      ...data[key],
      label: key,
    });
  })
  return categories;
}

const App = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    init();
  }, []);

  const init = () => {
    fetch('https://smartqdemo.firebaseio.com/events-data.json')
      .then(res => res.json())
      .then((data) => {

        const { extras, menu, paymentMethods, submenu } = data;
        console.log(data, 'data');
        const categories = extractCategories(extras.categories);

        if (categories && categories.length) {
          dispatch(setCategories(categories));
          dispatch(setActiveCategory(categories[0]));
          dispatch(setOptions(menu));
          dispatch(setSubOptions(submenu));
          dispatch(setPaymentMethods(paymentMethods));
        }
      })
  }

  return (
    <div>
      <Header />
      <Routes />
    </div>
  )
}

export default App;