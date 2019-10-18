import React, {useRef, useState} from "react";
import Axios from "axios";
const Login = (props) => {
 // make a post request to retrieve a token from the api
 // when you have handled the token, navigate to the BubblePage route
 const usernameRef = useRef();
 const passwordRef = useRef();
 const [loading, setLoading] = useState(false)
 const submit = () => {
   setLoading(true);
   Axios.post('http://localhost:5000/api/login', {
     username: usernameRef.current.value,
     password: passwordRef.current.value,
   })
   .then(response => {
     setLoading(false)
     console.log(response)
     localStorage.setItem('payload', response.data.payload)
     props.history.push('/colors')
   })
   .catch(error => {
     setLoading(false);
console.log(error);
   })
 }
 return (
   <div>
     <h1>Welcome to the Bubble App!</h1>
     <p>Please login here</p>
     <div>
       Username
     < input ref={usernameRef} type="text" />
     </div>
     <div>
       Password
     < input ref={passwordRef} type="text" />
     </div>
     <div>
       <button onClick={submit}>{loading ? "Loading" : "Submit"}</button>
     </div>
   </div>
 );
};
export default Login;

