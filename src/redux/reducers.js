import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_MORE_USERS,
  SET_LOGIN,
  INCREMENT_PAGE,
  CLEAR_SEARCH,
} from './types';

const initialState = {
  users: [],
  login: '',
  page: 1,
  isLoading: false,
  error: null,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS:
      return {...state, isLoading: true, login: action.login, page: 1};
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: null,
      };
    case FETCH_MORE_USERS:
      return {...state, isLoading: true};
    case FETCH_USERS_FAILURE:
      return {...state, isLoading: false, error: action.error};
    case SET_LOGIN:
      return {...state, login: action.payload};
    case INCREMENT_PAGE:
      return {...state, page: action.payload};
    case CLEAR_SEARCH:
      return initialState;
    default:
      return state;
  }
};

export default usersReducer;
