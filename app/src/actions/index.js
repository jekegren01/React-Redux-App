import axios from 'axios';

import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from "../reducers";

// export function firstCase() {
//     return null
// };


export const submit = (lat, lng) => dispatch => {
    console.log('get sunrise action')
    dispatch({ type: FETCHING_START});
    axios
    .get(`https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}`)
    .then((res) => {
      dispatch({type: FETCHING_SUCCESS, payload: res.data})
      console.log(res)})
    .catch((err) => {
      dispatch({
        type: FETCHING_FAILURE, 
        })
      console.log(err)});
};



// `https://api.sunrise-sunset.org/json?lat=${input}&lng=${input}`