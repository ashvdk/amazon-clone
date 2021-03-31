import { combineReducers } from 'redux'

let getProductDetails = (state = [], action) => {
  switch (action.type) {
    case 'GET_PRODUCTS':
      return [...action.payload];
    default:
      return state;
  }
}

export default combineReducers({
  getProductDetails,
})