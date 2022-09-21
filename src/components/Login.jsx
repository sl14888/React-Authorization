import React from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import FormItem from './FormItem';
import { useNavigate } from 'react-router-dom';
import { message } from 'antd';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = (email, password, setLoading) => {
    const errorMessage = () => {
      message.error({
        content:
          'This User is not registered, please check the correctness of the entered data',
        style: {
          marginTop: '20vh',
        },
      });
    };

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        setLoading(false);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        errorMessage();
      });
  };

  return <FormItem title="Login" handleClick={handleLogin} />;
};

export default Login;
