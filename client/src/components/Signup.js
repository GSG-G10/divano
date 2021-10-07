import React, { useState } from "react";
import axios from "axios";
import Input from "./Common/Input";
// import Button from "./Common/Button";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { message } from "antd";

const Signup = (props) => {
  const [value, setValue] = useState({});
  const { active, setActive } = props;


  const handleSignUpFetch = async (e) => {
      e.preventDefault()
      const {username, email, password} = value
      if (username && email && password) {
          if (value.password && value.password.length >= 8){
              if (value.password === value.confirmPassword){
                try{const response = await axios('/api/v1/signup',{
                    method: 'POST',
                    data: value
                  })
                  message.success(response.data.message)
                  setActive('')
                } catch (err) {
                    message.error(err.response.data.message)
                }
                  
              } else {
                message.error('passwords are not the same')
              }
          } else {
            message.error('password length must be more than 8 characters')
          }
      } else {
        message.error('there should not be empty boxes')
      }

  }

  const handleChange = () => {
    setActive("");
  };
  const handelInputChange = (e) => {
    const newValue = e.target.value;
    const inputName = e.target.name;
    console.log(e.target.name);
    setValue((prevState) => {
      return { ...prevState, [inputName]: newValue };
    });
    console.log(value);
  };

  return (
    <>
      <div className={`add-form-container ${active}`}>
        <div className="popup-form-container">
        <span onClick={handleChange} class="close" title="Close Modal">&times;</span>
        <h2 className="form-title">Sign Up</h2>
        
          <form className="add-form">
          <TextField
          required
         margin='normal'
         className='outlined-password-input'
          id="outlined-required"
          label="name"
          name='name'
          type='name'
          onChange={handelInputChange}
        />
          <TextField
          required
         margin='normal'
         className='outlined-password-input'
          id="outlined-required"
          label="email"
          name='email'
          type='email'
          onChange={handelInputChange}
        />
          <TextField
          required
         margin='normal'
         className='outlined-password-input'
          id="outlined-required"
          label="password"
          name='password'
          type='password'
          onChange={handelInputChange}
        />
          <TextField
          required
         margin='normal'
         className='outlined-password-input'
          id="outlined-required"
          label="confirm password"
          name='confirmPassword'
          type='password'
          onChange={handelInputChange}
        />
           
          </form>
          <div className="btns">
            <Button variant="outlined" onClick={handleChange} >Cancel</Button>
            <Button variant="contained" onClick={handleSignUpFetch} color='primary'>Sign Up</Button>

           
          </div>
        <p className="link">
          <u>Log In</u>
        </p>
        </div>
      </div>
      <div className={`content-hider ${active}`}></div>
    </>
  );
};

export default Signup;
