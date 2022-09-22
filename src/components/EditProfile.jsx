import React from 'react';

import { Avatar, Divider, Input, Form, Modal, Button } from 'antd';
import { getAuth, updateEmail, updatePassword, updateProfile } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { setUser } from '../store/slices/userSlice';

const EditProfile = ({ modalOpen, setModalOpen }) => {
  const { email, password } = useAuth();
  const dispatch = useDispatch();

  const auth = getAuth();

  const onFinish = (values) => {
    console.log(values);

    auth.currentUser.reload().then(() => {
      updateEmail(auth.currentUser, values.email)
        .then(() => {
          console.log('email update on ' + values.email);
          setModalOpen(false);
        })
        .catch((error) => {
          console.error(error);
        });

      updatePassword(auth.currentUser, values.password)
        .then(() => {
          console.log('pass update on ' + values.password);
          setModalOpen(false);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  return (
    <Modal
      title="Edit Profile"
      centered
      open={modalOpen}
      footer={null}
      onCancel={() => setModalOpen(false)}
    >
      <Avatar
        shape="square"
        src="https://lh3.googleusercontent.com/a-/ACNPEu_FUmzcaRo0bCNA-RtlXz0dZ4b6KdxGIU4HrVFmfA=s360-p-rw-no"
        size={164}
        style={{ margin: '0 auto', display: 'flex' }}
      />
      <Divider />
      <Form name="form" onFinish={onFinish}>
        <div className="card-content">
          <span>Your Email:</span>
          <Form.Item name="email" rules={[{ type: 'email', required: true }]} hasFeedback>
            <Input placeholder={email} />
          </Form.Item>
        </div>
        <div className="card-content">
          <span>Your Password:</span>
          <Form.Item name="password" rules={[{ required: true, min: 6 }]} hasFeedback>
            <Input.Password type="password" placeholder={password} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProfile;
