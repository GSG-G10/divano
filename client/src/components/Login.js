import React, { useState} from "react";
import axios from "axios"
import {Link} from 'react-router-dom';
import { message } from "antd";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';



const Login = (props) => {
    const [value, setValue] = useState({email: '', password: ''});
    const { active, setActive } = props;
  
    const handleSignUpFetch = async (e) => {
        e.preventDefault()
        const {email, password} = value
        if (email && password) {
            if (value.password && value.password.length >= 8){
                  try{const response = await axios.post('/api/v1/login',value)
                    if(response.data.message === 'logged in successfully'){
                        message.success(response.data.message)
                        return setActive('')
                    }
                   return message.error(response.data.message)
                  } catch (err) {
                    return  message.error(err.response.data.message || 'Internal Server Error')
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
      setValue((prevState) => {
        return { ...prevState, [inputName]: newValue };
      });
    };
    return (
        <>
          <div className={`add-form-container ${active}`}>
          <span onClick={handleChange} className="close" title="Close Modal">&times;</span>
            <h2 className="form-title">Login</h2>
            <div className="popup-form-container">
              <form className="add-form">
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
          id="outlined-password-input"
          label="Password"
          type="password"
          name='password'
          onChange={handelInputChange}
        />
              </form>
              <div className="btns">
              <Button variant="outlined" onClick={handleChange} >Cancel</Button>
              <Button variant="contained" onClick={handleSignUpFetch} color='primary'>Login</Button>
              </div>
              <Link to='/signup' className="link" >
          <u>Sign Up</u>
        </Link>
            </div>
          </div>
          <div className={`content-hider ${active}`}></div>
        </>
      );
}

export default Login;
