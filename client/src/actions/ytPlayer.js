import * as api from '../api';

export const getPlayList = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPlayList();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const addUrl = (post) => async (dispatch) => {
  try {
    const { data } = await api.addUrl(post);

    dispatch({ type: 'ADD_URL', payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUrl = (id) => async (dispatch) => {
  try {
    await api.deleteUrl(id);

    dispatch({ type: 'DELETE_URL', payload: id });
  } catch (error) {
    console.log(error);
  }
};