import axios from 'axios';
import {
  FETCH_USERS,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  FETCH_MORE_USERS,
  SET_LOGIN,
  INCREMENT_PAGE,
  CLEAR_SEARCH,
} from './types';

export const searchUsers = login => async dispatch => {
  dispatch({type: FETCH_USERS});
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${login}&per_page=10`,
    );
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: response.data.items,
      login: login,
    });
  } catch (error) {
    dispatch({type: FETCH_USERS_FAILURE, error: error.message});
  }
};

export const fetchMoreUsers = () => async (dispatch, getState) => {
  const {page, login, users} = getState().users;
  dispatch({type: FETCH_MORE_USERS});
  try {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${login}&page=${
        page + 1
      }&per_page=10`,
    );
    dispatch({type: INCREMENT_PAGE, payload: page + 1});
    dispatch({
      type: FETCH_USERS_SUCCESS,
      payload: [...users, ...response.data.items],
    });
  } catch (error) {
    dispatch({type: FETCH_USERS_FAILURE, error: error.message});
  }
};

export const setLoginText = login => ({
  type: SET_LOGIN,
  payload: login,
});

export const setpageCount = pageCount => ({
  type: INCREMENT_PAGE,
  payload: pageCount,
});

export const clearSearch = () => ({
  type: CLEAR_SEARCH,
});
