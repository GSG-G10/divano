import React, { useState} from "react";
import axios from "axios"
import Input from "./Common/Input";
import Button from "./Common/Button";

const Signup = (props) => {
  const [value, setValue] = useState({});
  const { active, setActive } = props;

  const handleSignUpFetch = async () => {
    try{
      const response = await axios.post('/api/v1/signup')
      console.log(response);
      return ;
    }catch(err){
      console.log(err);
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
        <h2 className="form-title">Sign Up</h2>
        <div className="popup-form-container">
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
              className="save"
              textcontent="Cancel"
              type="cancel"
              onClick={handleChange}
              id={"cancel"}
            />

            <Button
              className="signup"
              textcontent="signup"
              type="submit"
              onClick={handleSignUpFetch}
              id={"cancel"}
            />
          </div>
        </div>
      </div>
      <div className={`content-hider ${active}`}></div>
    </>
  );
};

export default Signup;
