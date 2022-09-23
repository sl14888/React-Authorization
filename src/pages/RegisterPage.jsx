import React from 'react';
import { Col, Divider, Row } from 'antd';
import Register from '../components/Register';
import StepSwiper from '../components/StepSwiper';

const RegisterPage = () => {
  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} className="wrapper">
        <StepSwiper />

        <Divider className="register-divider">Register</Divider>
        <Register />
      </Col>
    </Row>
  );
};

export default RegisterPage;
