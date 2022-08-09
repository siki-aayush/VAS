import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, Select, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { registerInterface } from '../../interfaces';
import reqInstance from '../../axios/axios';

/**
 * RegisterForm.
 * Renders the registration form
 */
const RegisterForm = () => {
  const { Option } = Select;
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

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }

    console.log(e?.fileList);
    return e?.fileList;
  };

  /**
   * onFinish.
   * @param {registerInterface} values
   */
  const onFinish = async (values: registerInterface) => {
    if (values.password !== values.confirmPassword) {
      setConfirmPassErr("The password and confirm password doesn't match");
      return;
    }

    console.log(values);

    const data = new FormData();
    data.append('first_name', values.first_name);
    data.append('last_name', values.last_name);
    data.append('ethnicity', values.ethnicity);
    data.append('gender', values.gender);
    data.append('email', values.email);
    data.append('birth_date', values.birth_date.format('YYYY-MM-DD'));
    data.append('province', values.province);
    data.append('district', values.province);
    data.append('street', values.province);
    data.append('insurance_id', values.insurance_id);
    data.append('insurance_provider', values.insurance_provider);
    data.append('member_id', values.member_id);
    data.append('password', values.password);
    data.append('document', values.document[0].originFileObj);

    try {
      const resp = await reqInstance('/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        data: data,
      });
      console.log(resp);

      navigate('/login');
    } catch (err) {
      console.log(err);
    }
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
      style={{ maxWidth: '500px' }}
    >
      <Form.Item>
        <Input.Group compact>
          <Form.Item name="first_name" noStyle rules={[{ required: true }]}>
            <Input placeholder="First Name" style={{ width: '47%', marginRight: '5%' }} />
          </Form.Item>
          <Form.Item name="last_name" noStyle rules={[{ required: true }]}>
            <Input placeholder="Last Name" style={{ width: '47%' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item>
        <Input.Group compact>
          <Form.Item name="ethnicity" noStyle rules={[{ required: true }]}>
            <Input placeholder="Ethnicity" style={{ width: '47%', marginRight: '5%' }} />
          </Form.Item>

          <Form.Item name="gender" noStyle rules={[{ required: true, message: 'Please select gender!' }]}>
            <Select placeholder="select your gender" style={{ width: '47%' }}>
              <Option value="male">Male</Option>
              <Option value="female">Female</Option>
              <Option value="other">Other</Option>
            </Select>
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item name="email" rules={[{ type: 'email' }]} wrapperCol={{ span: 18 }}>
        <Input placeholder="Email" />
      </Form.Item>

      <Form.Item name="birth_date">
        <DatePicker placeholder="Select your birth date" />
      </Form.Item>

      <Form.Item>
        <Input.Group compact>
          <Form.Item name="province" noStyle rules={[{ required: true }]}>
            <Select placeholder="province" style={{ width: '30%', marginRight: '3%' }}>
              <Option value="1">Province1</Option>
              <Option value="2">Province2</Option>
              <Option value="3">Province3</Option>
              <Option value="4">Province4</Option>
              <Option value="5">Province5</Option>
              <Option value="6">Province6</Option>
              <Option value="7">Province7</Option>
            </Select>
          </Form.Item>
          <Form.Item name="district" noStyle rules={[{ required: true }]}>
            <Input style={{ width: '30%', marginRight: '3%' }} placeholder="Input District" />
          </Form.Item>
          <Form.Item name="street" noStyle rules={[{ required: true }]}>
            <Input style={{ width: '33%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item>
        <Input.Group compact>
          <Form.Item name="insurance_id" noStyle>
            <Input placeholder="Insurance Id" style={{ width: '30%', marginRight: '3%' }} />
          </Form.Item>

          <Form.Item name="member_id" noStyle>
            <Input placeholder="Member Id" style={{ width: '30%', marginRight: '3%' }} />
          </Form.Item>

          <Form.Item name="insurance_provider" noStyle>
            <Input placeholder="Insurance Provider" style={{ width: '33%' }} />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item name="document" label="Document Image" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Document Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        name="password"
        wrapperCol={{ span: 18 }}
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>

      <Form.Item
        name="confirmPassword"
        wrapperCol={{ span: 18 }}
        rules={[{ required: true, message: 'Please input your confirm password!' }]}
      >
        <Input.Password placeholder="Confirm Password" />
      </Form.Item>

      <p style={{ color: 'red' }}>{confirmPassErr}</p>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} style={{ marginTop: '45px' }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegisterForm;
