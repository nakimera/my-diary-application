import { FETCH_ENTRIES } from './types';
import { toast } from "react-toastify";
import {token} from '../global';


const addEntry = ()=> dispatch => {
  fetch('https://my-diary-app-np.herokuapp.com/api/v1/entries', {
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
        // console.log(response.data.data)
          const message = response.data['message']
          if (response.data.message === 'All entries successfully retrieved') {
            toast.success(message,{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
            });

            dispatch({
              type: FETCH_ENTRIES,
              payload: response
            });
          }
          else {
            toast.error('No entries. Click the plus button to add entries',{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
          });
         }
        }
      )
      .catch(error => {
        console.log(error);
      })
  );
};

export default addEntry;