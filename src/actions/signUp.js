import { SIGNUP_SUCCESS } from './types';
import { toast } from 'react-toastify';
import { baseUrl } from '../global';

const userSignupAction = user => dispatch => {
  fetch(baseUrl + 'auth/signup', {
    method: 'POST',
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response =>
    response
      .json()
      .then(data => ({
        data: data,
        status: response.status
      }))
      .then((response) => {
          const message = response.data['message'];
          dispatch({
            type: SIGNUP_SUCCESS,
            payload: response.data
          });
          if (response.status === 201) {
            toast.success(message,{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
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

export default userSignupAction;
