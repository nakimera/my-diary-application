import { FETCH_ENTRY } from './types';
import {token, baseUrl } from '../global';

const fetchEntry = (id)=> dispatch => {
  return fetch(baseUrl + 'entries/'+id, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      'access-token': token,
    },
  }).then(response =>
    response
      .json()
      .then(data => ({
        data: data,
      }))
      .then((response) => {
            dispatch({
              type: FETCH_ENTRY,
              payload: response
            });
          }
      )
      .catch(error => {
        console.log(error);
      })
  );
};

export default fetchEntry;