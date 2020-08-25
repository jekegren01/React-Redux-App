import axios from 'axios';

import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from "../reducers";

// export function firstCase() {
//     return null
// };


export const submit = () => dispatch => {
    console.log('get sunrise action')
    dispatch({ type: FETCHING_START});
    axios
    .get(`https://api.sunrise-sunset.org/json?lat=${input}&lng=${input}`)
    .then((res) => {
      dispatch({type: FETCHING_SUCCESS, payload: res.data.joke})
      console.log(res)})
    .catch((err) => {
      dispatch({
        type: FETCHING_FAILURE, 
        payload: `${err.response.message} code: ${err.response.code}`})
      console.log(err)});
};



// `https://api.sunrise-sunset.org/json?lat=${input}&lng=${input}`