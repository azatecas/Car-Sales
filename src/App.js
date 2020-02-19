import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { addFeature, removeFeature, addTotal } from './actions/actions'

const App = ({car, additionalFeatures, additionalPrice, removeFeature, addTotal}) => {
  // console.table(props);
  const removeFeatures = item => {
    // dispatch an action here to remove an item
    removeFeature(item)
    addTotal(-item.price)
  };

  const buyItem = item => {
    // dipsatch an action here to add an item
    addFeature(item)
    addTotal(item.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={car} />
        <AddedFeatures car={car} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={additionalFeatures} />
        <Total car={car} additionalPrice={additionalPrice} />
      </div>
    </div>
  );
};
function mapStateToProps(state) {
  console.log('state',state)
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }  
}

export default connect(mapStateToProps,{
  addFeature,
  removeFeature,
  addTotal
})(App);
