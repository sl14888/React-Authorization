import React from 'react';
import { EditOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Card, Divider, Tooltip } from 'antd';
import { useAuth } from '../hooks/useAuth';
import { useDispatch } from 'react-redux';
import { removeUser } from '../store/slices/userSlice';

const Profile = () => {
  const { email, password } = useAuth();
  const dispatch = useDispatch();

  return (
    <Card
      className="card"
      actions={[
        <Tooltip placement="topLeft" title="Logout" arrowPointAtCenter>
          <LogoutOutlined onClick={() => dispatch(removeUser())} />
        </Tooltip>,
        <Tooltip placement="topLeft" title="Edit your profile" arrowPointAtCenter>
          <EditOutlined key="edit" />
        </Tooltip>,
      ]}
    >
      <Divider>Welcome to Your Profile!</Divider>

      <Avatar
        shape="square"
        src="https://lh3.googleusercontent.com/a-/ACNPEu_FUmzcaRo0bCNA-RtlXz0dZ4b6KdxGIU4HrVFmfA=s360-p-rw-no"
        size={164}
        style={{ margin: '0 auto', display: 'flex' }}
      />
      <Divider />
      <div className="card-content">
        <span>Your Email:</span> {email}
      </div>
      <div className="card-content">
        <span>Your Password:</span> {password}
      </div>
    </Card>
  );
};

export default Profile;
