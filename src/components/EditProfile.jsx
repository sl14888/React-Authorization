import React from 'react';

import { Avatar, Divider, Input, Form, Modal, Button } from 'antd';
import { getAuth, updateEmail, updatePassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { setUser } from '../store/slices/userSlice';
import Swal from 'sweetalert2';

const EditProfile = ({ modalOpen, setModalOpen }) => {
  const { email, password } = useAuth();
  const [loading, setLoading] = React.useState(false);

  const [form] = Form.useForm();

  const dispatch = useDispatch();

  const auth = getAuth();

  const emailValue = Form.useWatch('email', form);
  const passValue = Form.useWatch('password', form);

  const onUpdateEmail = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your email details will be replaced with new ones!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1890ff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      if (result.isConfirmed) {
        setLoading(true);

        updateEmail(auth.currentUser, emailValue)
          .then(() => {
            setLoading(false);

            console.log('email update on ' + emailValue);
            dispatch(
              setUser({
                email: emailValue,
                password: password,
              })
            );
          })
          .catch((error) => {
            console.error('email', error);
          });
      }
    });
  };

  const onUpdatePassword = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Your Password details will be replaced with new ones!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1890ff',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!',
    }).then((result) => {
      setLoading(true);
      if (result.isConfirmed) {
        updatePassword(auth.currentUser, passValue)
          .then(function () {
            setLoading(false);

            console.log('pass update on ', passValue);
            dispatch(
              setUser({
                email: email,
                password: passValue,
              })
            );
          })
          .catch(function (error) {
            console.error('error pass', error);
          });
      }
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
      <Form name="form" form={form}>
        <div className="card-content">
          <span>Your Email:</span>
          <Form.Item name="email" rules={[{ type: 'email', required: true }]} hasFeedback>
            <Input placeholder={email} />
          </Form.Item>
        </div>
        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            onClick={onUpdateEmail}
            className="login-form-button"
          >
            Update Email
          </Button>
        </Form.Item>

        <div className="card-content">
          <span>Your Password:</span>
          <Form.Item name="password" rules={[{ required: true, min: 6 }]} hasFeedback>
            <Input.Password type="password" placeholder={password} />
          </Form.Item>
        </div>

        <Form.Item>
          <Button
            type="primary"
            loading={loading}
            onClick={onUpdatePassword}
            className="login-form-button"
          >
            Update Password
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default EditProfile;
