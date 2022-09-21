import React from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/slices/userSlice';
import FormItem from './FormItem';
import { useNavigate } from 'react-router-dom';
import { Alert, message } from 'antd';

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRegister = (email, password) => {
    const errorMessage = () => {
      message.error({
        content: 'An error has occurred',
        style: {
          marginTop: '20vh',
        },
      });
    };
    const auth = getAuth();

    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
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
        console.log(error);
        errorMessage();
      });
  };

  return <FormItem title="Register" handleClick={handleRegister} />;
};

export default Register;
