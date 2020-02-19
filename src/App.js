import React from 'react';
import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';
import { connect } from 'react-redux'
import { addFeature, removeFeature, addTotal } from './actions/actions'

const App = (props) => {
  // console.table(props);
  const removeFeature = item => {
    // dispatch an action here to remove an item
    props.removeFeature(item)
    props.addTotal(-item.price)
  };

  const buyItem = item => {
    console.log('item', item)
    // dipsatch an action here to add an item
    props.addFeature(item)
    // props.addTotal(item.car.price)
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header car={props.car} additionalPrice={props.additionalPrice}/>
        <AddedFeatures car={props.car} addFeature={props.addFeature} removeFeature={props.removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures additionalFeatures={props.additionalFeatures} buyItem={buyItem} />
        <Total car={props.car} additionalPrice={props.additionalPrice} />
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
