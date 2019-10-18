import React, {useRef} from "react";
import Axios from "axios";
import styled from 'styled-components';

const StyledDiv = styled.div `
width: 70%;
margin: 0 auto;

.form{
  border: 1px solid blue;
  width: 80%;
  margin: 2rem auto;

  div{
    margin: 2rem;

    input{
      margin-left: 1rem;
    }
  }
}
`



const Login = (props) => {
 // make a post request to retrieve a token from the api
 // when you have handled the token, navigate to the BubblePage route
 const usernameRef = useRef();
 const passwordRef = useRef();

 const submit = () => {
   
   Axios.post('http://localhost:5000/api/login', {
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
  <StyledDiv>
   <div>
     <h1>Welcome to the Bubble App!</h1>
     <div className = "form">
       <div>
       Username
     < input ref={usernameRef} type="text" />
     </div>
     <div>
       Password
     < input ref={passwordRef} type="text" />
     </div>
     <div>
       <button onClick={submit}>Submit</button>
     </div>
   </div>
   </div>
   </StyledDiv>
 );
};
export default Login;

