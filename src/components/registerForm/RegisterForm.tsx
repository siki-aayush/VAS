import React from 'react';
import { Button, DatePicker, Form, Input, InputNumber } from 'antd';
import { useNavigate } from 'react-router-dom';

/**
 * RegisterForm.
 * Renders the registration form
 */
const RegisterForm = () => {
  interface registerInterface {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: moment.Moment;
    password: string;
    'confirm-password': string;
  }

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
    console.log(values);
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

      <Form.Item name="confirm-password" rules={[{ required: true, message: 'Please input your confirm password!' }]}>
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ marginTop: '43px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
