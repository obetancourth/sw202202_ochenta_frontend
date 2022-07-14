import { axiosPublic } from './axios';
const getSignIn = (email, password) => {
  return axiosPublic.post(
    '/auth/signin',
    {
      email,
      password
    }
  )
};

export default getSignIn;
