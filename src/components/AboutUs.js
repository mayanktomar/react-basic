import React from 'react';
import { LoginContext } from '../context/context';
import { useContext } from 'react';

const AboutUs = () => {
  const loginState = useContext(LoginContext);
  return loginState.isLoggedIn ? (
    <div>
        <h1>About Us</h1>
        <h4>Coming soon..!!</h4>
    </div>
    
  ) : 
  (
    <h1>Please Login</h1>
  )
}

export default AboutUs;