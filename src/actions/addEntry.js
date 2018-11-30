import { ADD_ENTRY } from './types';
import { toast } from "react-toastify";
import {token} from '../global';


const addEntry = entry => dispatch => {
  fetch('https://my-diary-app-np.herokuapp.com/api/v1/entries', {
    method: 'POST',
    headers: {
      "content-type": "application/json",
      'access-token': token,
    },
    body: JSON.stringify(entry)
  }).then(response =>
    response
      .json()
      .then(data => ({
        data: data,
        status: response.status
      }))
      .then((response) => {
          const message = response.data['message']
          if (response.status === 201) {
            toast.success(message,{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
            });
            dispatch({
              type: ADD_ENTRY,
              payload: response.data
            });
          }
          else {
            toast.error(message,{
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