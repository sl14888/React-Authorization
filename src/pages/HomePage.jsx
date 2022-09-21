import { Col, Divider, Row } from 'antd';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Profile from '../components/Profile';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  const { isAuth } = useAuth();
  return isAuth ? (
    <div>
      <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
        <Col xs={20} sm={16} md={12} lg={8} xl={6}>
          <Profile />
        </Col>
      </Row>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
};

export default HomePage;
