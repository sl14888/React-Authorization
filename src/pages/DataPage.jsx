import React from 'react';
import { Button, Col, Divider, Form, Input, Row } from 'antd';
import StepSwiper from '../components/StepSwiper';

import { useDispatch } from 'react-redux';
import { setProfile } from '../store/slices/userSlice';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { getAuth } from 'firebase/auth';

const DataPage = () => {
  const auth = getAuth();
  const dispatch = useDispatch();

  const onFinish = (values) => {
    const userId = auth.currentUser?.uid;

    dispatch(
      setProfile({
        firstName: values.firstName,
        lastName: values.lastName,
      })
    );

    const profilesRef = doc(db, 'profiles', userId);
    setDoc(profilesRef, { firstName: values.firstName, lastName: values.lastName });
  };

  return (
    <Row type="flex" justify="center" align="middle" style={{ height: '100vh' }}>
      <Col xs={20} sm={16} md={12} lg={8} xl={6} className="wrapper">
        <StepSwiper step={1} />
        <Divider className="register-divider">Set Profile data</Divider>
        <Form onFinish={onFinish}>
          <Form.Item name="firstName" rules={[{ required: true }]}>
            <Input placeholder="First name" />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true }]}>
            <Input placeholder="Last name" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Submiit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
};

export default DataPage;
