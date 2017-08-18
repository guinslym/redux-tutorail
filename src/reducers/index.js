import { combineReducers } from 'redux';
import ItemReducer from './item-reducer';


// Having defined a reducer, we need to connect it to our application using the combineReducer() function.
const rootReducer = combineReducers({
  items: ItemReducer
});

export default rootReducer;
