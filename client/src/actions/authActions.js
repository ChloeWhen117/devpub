import axios from 'axios';

import { GET_ERRORS,  } from './types';

// Register User
export const registerUser = (newUser, history) => dispatch => {
  axios
    .post('/api/users/register', newUser)
    .then(res => history.push('/login'))
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
