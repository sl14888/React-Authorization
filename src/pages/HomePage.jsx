import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';

const HomePage = () => {
  const { isAuth, email } = useAuth();
  const dispatch = useDispatch();
  console.log(isAuth);
  return isAuth ? (
    <div>
      <h1>Wellcome</h1>
      <button onClick={() => dispatch(removeUser())}>Log out from {email}</button>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default HomePage;
