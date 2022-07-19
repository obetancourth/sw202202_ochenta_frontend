import { combineReducers } from "redux";

// Reducers Individuales
import app from './app';
import cashflow from './cashflow';

const rootReducer = combineReducers({
  app,
  cashflow
});

export default rootReducer;
