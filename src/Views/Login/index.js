import LoginUx from "./LoginUx";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { submitLogin, cleanLoginError } from './LoginActions';

const Login = () => {
  const Navigator = useNavigate();
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({ email: '', password: '' });
  const { isLoading, error } = useSelector(state => state.security);

  const onChangeHandler = (event) => {
    let { name, value } = event.target;
    let newFormValues = {
      ...formValues,
      [name]: value
    }
    if (error) {
      cleanLoginError(dispatch);
    }
    setFormValues(newFormValues);
  }
  const onSignInClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator('/signin');
  }
  const onLoginClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await submitLogin(dispatch, formValues.email, formValues.password);
      Navigator('/home')
    } catch (ex) {
      console.log(ex);
    }
  }
  return (
    <LoginUx
      passwordValue={formValues.password}
      emailValue={formValues.email}
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
      onChangeHandler={onChangeHandler}
      isLoading={isLoading}
      error={error}
    />
  );
}
export default Login;
