import { SIGNUP_SUCCESS } from './types';
import { toast } from 'react-toastify';

const userSignupAction = user => dispatch => {
  fetch("https://my-diary-app-np.herokuapp.com/api/v1/auth/signup", {
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
          if (response.status === 201) {
            toast.success(message,{
              hideProgressBar: true,
              position: toast.POSITION.TOP_CENTER,
            });
            dispatch({
              type: SIGNUP_SUCCESS,
              payload: response.data
            });
          }
          toast.error(message,{
            hideProgressBar: true,
            position: toast.POSITION.TOP_CENTER,
          });
        }
      )
      .catch(error => {
        console.log(error);
      })
  );
};

export default userSignupAction;
