import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { connect, Provider, combineReducers } from 'react-redux';
import { createStore } from 'redux';


let defaultValue = [
  { id:0, name:'이벤트 증정품', quan:1, price:0 }
];

let store = createStore(reducer);


function reducer(state = defaultValue, action) {
  if( action.type === '항목추가') {
    let copy = [...state];
    let found = state.findIndex((a)=>{return a.name === action.payload.name})
    if(found >= 0){  
      copy[found].quan++
    }else{
      copy.push(action.payload);
    }
    return copy 
  } else if( action.type === '항목제거') {
    let copy = [...state];
    let index = copy.indexOf(action.item)-1;
    copy.splice(index,1);
    return copy
  } else if( action.type === '항목모두제거') {
    let copy = [...state];
    copy.splice(0,copy.length);
    return copy
  } else if( action.type === '수량증가' ){ 
      let copy = [...state];
      copy[action.item].quan++; 
      return copy
  } else if( action.type === '수량감소' ){
      let copy = [...state];
      copy[action.item].quan--;  
      if (copy[action.item].quan < 1){
        copy[action.item].quan = 1;
      }
      return copy  
  } else if( action.type === 'priceSum' ){
      let copy = [...state];
      let sum = 0
      for(var i=0; i < copy.item.length; i++)
        sum += copy[i].price;
        alert(copy[i].price)
      return sum

  } else {
      return state
  }
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
