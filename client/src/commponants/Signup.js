import React, { useState } from "react";
import axios from "axios";
import Input from "./Common/Input";
import Button from "./Common/Button";
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
            <Input
              type="url"
              name="username"
              id="username"
              placeholder="username"
              onChange={handelInputChange}
              required
            />
            <Input
              type="text"
              name="email"
              id="email"
              placeholder="email"
              onChange={handelInputChange}
              required
            />

            <Input
              type="url"
              name="password"
              id="password"
              placeholder="password"
              onChange={handelInputChange}
              required
            />
            <Input
              type="url"
              name="confirmPassword"
              id="confirm-password"
              placeholder="confirm password"
              onChange={handelInputChange}
              required
            />
          </form>
          <div className="btns">
            <Button
              className="cancel"
              textcontent="Cancel"
              type="cancel"
              onClick={handleChange}
              id={"cancel"}
            />

            <Button
              className="signup"
              textcontent="Sign Up"
              type="submit"
              onClick={handleSignUpFetch}
              id={"signup"}
            />
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
