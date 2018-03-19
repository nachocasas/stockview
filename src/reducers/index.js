import { combineReducers } from 'redux';
import QuotesReducer from './quotes';

const rootReducer = combineReducers({
  quotes: QuotesReducer,
});

export default rootReducer;
