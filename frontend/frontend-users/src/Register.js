import YodlrApi from './Api';
import React, { useState } from 'react';
import "./Register.css";

const Register = () => {
  const [info,changeInfo] = useState();
  const [isRegistered,changeIsRegistered] = useState(false);
  
  const handleChange = (e) => {
      const {name,value} = e.target;
      changeInfo(info => ({
          ...info,
          [name]: value
      }));
  }

  const handleClick = (e) => {
      e.preventDefault();
      YodlrApi.addUser(info);
      changeIsRegistered(true);
  }

  return (
      <div>
      {!isRegistered && <div>
      <form>
          <div>
              <label htmlFor="firstName">First Name: </label>
              <input type='text' name="firstName" placeholder="" onChange={handleChange} />
          </div>
          <div>
              <label htmlFor="lastName">Last Name: </label>
              <input type='text' name="lastName" placeholder="" onChange={handleChange} />
          </div>
          <div>
              <label htmlFor="email">Email: </label>
              <input type='text' name="email" placeholder="" onChange={handleChange} />
          </div>
          <div>
              <button onClick={handleClick}>Submit</button>
          </div>
      </form>
      </div>}
      {isRegistered && <div><h1>Thank you for signing up!</h1></div>}
      </div>
      
  )
}



export default Register;