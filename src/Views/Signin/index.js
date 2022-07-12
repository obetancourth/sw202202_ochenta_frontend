import SignInUx from "./SignIn";
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const Navigator = useNavigate();
  const onSignInClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }
  const onLoginClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    Navigator("/login");
  }
  return (
    <SignInUx
      onSignInClick={onSignInClick}
      onLoginClick={onLoginClick}
    />
  );
}
export default SignIn;
