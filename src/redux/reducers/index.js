import { combineReducers } from 'redux';

import filterReducer from './filters';
import pizzasReducer from './pizzas';

const rootReduser = combineReducers({
  pizzas: pizzasReducer,
  // pizzas,
  filters: filterReducer,
});

export default rootReduser;
