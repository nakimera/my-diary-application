import { LOGIN_USER } from './types';
import { toast } from 'react-toastify';

const userLoginAction = user => dispatch => {
  fetch("https://my-diary-app-np.herokuapp.com/api/v1/auth/login", {
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
            dispatch({
              type: LOGIN_USER,
              payload: response.data
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
