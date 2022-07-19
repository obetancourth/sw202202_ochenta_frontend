import LoginUx from "./LoginUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import getSignIn from "../../Services/api/signinapi";

const Login = () => {
  const Navigator = useNavigate();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    setFormValues(newFormValues);
  }
  const onSignInClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
      Navigator('/signin');
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    Navigator("/login");
  }
  return (
    <LoginUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
    />
  );
}
export default Login;
