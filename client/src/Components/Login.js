import React, { useState} from "react";
import axios from "axios"
import Input from "./Common/Input";
import Button from "./Common/Button";
import { message } from "antd";

const Login = (props) => {
    const [value, setValue] = useState({});
    const { active, setActive } = props;
  
    const handleSignUpFetch = async (e) => {
        e.preventDefault()
        const {email, password} = value
        if (email && password) {
            if (value.password && value.password.length >= 8){
                  try{const response = await axios('/api/v1/login',{
                      method: 'POST',
                      data: value
                    })
                    if(response.data.message === 'logged in successfully'){
                        message.success(response.data.message)
                        return setActive('')
                    }
                    message.error(response.data.message)
                  } catch (err) {
                      message.error(err.response.data.message)
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
            <h2 className="form-title">Login</h2>
            <div className="popup-form-container">
              <form className="add-form">
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
              </form>
              <div className="btns">
                <Button
                  className="save"
                  textcontent="Cancel"
                  type="cancel"
                  onClick={handleChange}
                  id={"cancel"}
                />
    
                <Button
                  className="login"
                  textcontent="Login"
                  type="submit"
                  onClick={handleSignUpFetch}
                  id={"login"}
                />
              </div>
            </div>
          </div>
          <div className={`content-hider ${active}`}></div>
        </>
      );
}

export default Login;
