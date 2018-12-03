import { LOGIN_USER } from './types';
import { toast } from 'react-toastify';
import { baseUrl } from '../global';

const userLoginAction = user => dispatch => {
  fetch(baseUrl + 'auth/login', {
    method: "POST",
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
          const message = response.data['message']
          if (response.status === 200) {
            toast.success(message,{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
            });
            const status = response.status;
            user={
              status,
              message:response.data.message
            }
            dispatch({
              type: LOGIN_USER,
              payload: user
            });
            const token = response.data.token;
            localStorage.setItem('token', token);
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

export default userLoginAction;
