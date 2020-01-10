import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

// Redux Hooks
import {useSelector, useDispatch} from 'react-redux';

const App = () => {

  // Can grab these out individually to hopefully stop components from rendering all the damn time.

  // const car = useSelector( state => state.car);
  // const additionalFeatures = useSelector((state) => state.additionalFeatures);
  // const additionalPrice = useSelector((state) => state.additionalPrice);

  const state = useSelector( state => state);
  const dispatch = useDispatch();

  const removeFeature = item => {
    // dispatch an action here to remove an item
    dispatch({type: 'REMORE_FEATURE', payload: item});
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    dispatch({type: 'ADD_FEATURE', payload: item});
  };
console.log(state);
  return (
    <div className="boxes">
      <div className="box">
        <Header car={state.car} />
        <AddedFeatures removeFeature={removeFeature} car={state.car} />
      </div>
      <div className="box">
        <AdditionalFeatures buyItem={buyItem} additionalFeatures={state.additionalFeatures} />
        <Total car={state.car} additionalPrice={state.additionalPrice} />
      </div>
    </div>
  );
};

export default App;
