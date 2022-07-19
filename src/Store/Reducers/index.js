import { combineReducers } from "redux";

// Reducers Individuales
import app from './app';
import security from './security';
import cashflow from './cashflow';

const rootReducer = combineReducers({
    app,
    security,
    cashflow
});

export default rootReducer;