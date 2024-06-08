import axios from 'axios';

export const fetchTasks = () => async dispatch => {
  const response = await axios.get('/api/tasks');
  dispatch({ type: 'FETCH_TASKS', payload: response.data });
};
