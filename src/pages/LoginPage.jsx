import { Col, Divider, Row } from 'antd';
import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} className="wrapper">
        <Divider className="login-divider">Login</Divider>
        <Login />
      </Col>
    </Row>
  );
};

export default LoginPage;
