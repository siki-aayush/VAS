import React, { useState } from 'react';
import { Button, DatePicker, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import { registerInterface } from '../../interfaces';

/**
 * RegisterForm.
 * Renders the registration form
 */
const RegisterForm = () => {
  const [confirmPassErr, setConfirmPassErr] = useState<string>('');

  const navigate = useNavigate();

  // Size of the input fields and labels.
  const layout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 24 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };

  /**
   * onFinish.
   * @param {registerInterface} values
   */
  const onFinish = (values: registerInterface) => {
    if (values.password !== values.confirmPassword) {
      setConfirmPassErr("The password and confirm password doesn't match");
      return;
    }

    console.log(values.dateOfBirth.format('YYYY-MM-DD'));
    navigate('/login');
  };

  /* eslint-enable no-template-curly-in-string */
  return (
    <Form
      {...layout}
      className="register-form"
      name="register-form"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="large"
    >
      <Form.Item name="firstname" rules={[{ required: true }]}>
        <Input placeholder="First Name" />
      </Form.Item>

      <Form.Item name="lastname" rules={[{ required: true }]}>
        <Input placeholder="Last Name" />
      </Form.Item>

      <Form.Item name="email" rules={[{ type: 'email' }]}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name="dateOfBirth">
        <DatePicker placeholder="Select your birth date" />
      </Form.Item>

      <Form.Item name="password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item name="confirmPassword" rules={[{ required: true, message: 'Please input your confirm password!' }]}>
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <p style={{ color: 'red' }}>{confirmPassErr}</p>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ marginTop: '43px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
