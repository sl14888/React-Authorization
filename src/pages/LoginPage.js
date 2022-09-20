import React from 'react';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <p>
        Or <Link to="/register">Sign up</Link>
      </p>
    </div>
  );
};

export default LoginPage;
