import {createStore, applyMiddleware, combineReducers} from 'redux';
import usersReducer from './reducers';
import {thunk} from 'redux-thunk';

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
