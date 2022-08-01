import RegisterForm from '../../components/registerForm/RegisterForm';
import React from 'react';

import './Register.css';
import { Typography } from 'antd';

/**
 * Register.
 */
const Register = () => {
  const { Title } = Typography;
  return (
    <div className="register center">
      <div className="register__wrapper">
        <Title className="register__title">Sign Up</Title>
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
