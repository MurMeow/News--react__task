import {AUTHORIZATION_SUCCESS, AUTHORIZATION_FAIL, ADD_USER, REMOVE_USER, ADD_NEWS, REMOVE_NEWS} from './actionType'

export const setAuthorizationToSuccess = () => ({
  type: AUTHORIZATION_SUCCESS,
  // payload: {
  // 	id: id,
  // 	name: name
  // }
});

export const setAuthorizationToFail = () => ({
  type: AUTHORIZATION_FAIL,
  payload: {
    id: '',
    name: ''
  }
});

export const addUser = (id, name) => ({
  type: ADD_USER,
  // payload: {
  // 	id: '',
  // 	name: ''
  // }
});

export const removeUser = () => {
  return {
    type: REMOVE_USER,
    // payload: {
    // 	id: '',
    // 	name: ''
    // }
  }
};

export const addNews = (title, body, id, userId) => {
  const data = {
    title: title,
    body: body,
    id: id,
    userId: userId
  };

  return {
    type: ADD_NEWS,
    payload: {data: data}
  }
};
