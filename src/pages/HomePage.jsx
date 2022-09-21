import React from 'react';
import { Navigate } from 'react-router-dom';

const HomePage = () => {
  return <Navigate to="/login" replace />;
};

export default HomePage;
