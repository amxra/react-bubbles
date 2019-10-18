import React, { useRef } from "react";
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const usernameRef = useRef();
   const passwordRef = useRef();


   const submit = (props) => {
     axios.post('http://localhost:5000/api/login', {
       username: usernameRef.current.value,
       password: passwordRef.current.value,
     })
     .then(response => {
       console.log(response)
       localStorage.setItem('payload', response.data.payload)

       props.history.push('/colors')
     })
     .catch(error => {
        console.log(error);
     })
   }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form>
      <div className='login'>
      <div className='login-inputs'>
        username <input ref={usernameRef} type="text" />
        <br />
        password <input ref={passwordRef} type="text" />
      </div>

      <div>
        <button onClick={submit}>Submit</button>
      </div>
    </div>
      </form>
    </>
  );
};

export default Login;
