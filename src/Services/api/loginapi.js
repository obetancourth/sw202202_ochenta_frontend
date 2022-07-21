import { axiosPublic } from './axios';
const postLogin = (email, password) => {
  console.log("loginapi: ", { email, password });
  return axiosPublic.post(
    '/auth/login',
    {
      email,
      password
    }
  )
};

export default postLogin;
