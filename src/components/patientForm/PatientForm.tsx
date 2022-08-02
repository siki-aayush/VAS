import { UploadOutlined } from '@ant-design/icons';
import { Button, Form, Input, Upload, Select, DatePicker } from 'antd';
import React from 'react';

const layout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 18 },
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
/* eslint-enable no-template-curly-in-string */

const PatientForm = () => {
  const { Option } = Select;
  const onFinish = (values: any) => {
    console.log(values);
  };

  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} size="large">
      <Form.Item name="firstName" label="First Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="lastName" label="Last Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="birthDate" label="Birth date" rules={[{ required: true }]}>
        <DatePicker />
      </Form.Item>

      <Form.Item name="ethnicity" label="Ethnicity" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male</Option>
          <Option value="female">Female</Option>
          <Option value="other">Other</Option>
        </Select>
      </Form.Item>

      <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
        <Input />
      </Form.Item>

      <Form.Item label="Address">
        <Input.Group compact>
          <Form.Item name={['address', 'province']} noStyle rules={[{ required: true }]}>
            <Select placeholder="Select province" style={{ width: '33%' }}>
              <Option value="1">Province1</Option>
              <Option value="2">Province2</Option>
              <Option value="3">Province3</Option>
              <Option value="4">Province4</Option>
              <Option value="5">Province5</Option>
              <Option value="6">Province6</Option>
              <Option value="7">Province7</Option>
            </Select>
          </Form.Item>
          <Form.Item name={['address', 'district']} noStyle rules={[{ required: true }]}>
            <Input style={{ width: '33%' }} placeholder="Input District" />
          </Form.Item>
          <Form.Item name={['address', 'street']} noStyle rules={[{ required: true }]}>
            <Input style={{ width: '33%' }} placeholder="Input street" />
          </Form.Item>
        </Input.Group>
      </Form.Item>

      <Form.Item name="insuranceId" label="Insurance Id">
        <Input />
      </Form.Item>

      <Form.Item name="memberId" label="Member Id">
        <Input />
      </Form.Item>

      <Form.Item name="insuranceProvider" label="Insurance Provider">
        <Input />
      </Form.Item>

      <Form.Item name="document" label="Document Image" valuePropName="fileList" getValueFromEvent={normFile}>
        <Upload name="logo" action="/upload.do" listType="picture">
          <Button icon={<UploadOutlined />}>Document Image</Button>
        </Upload>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 10 }}>
        <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default PatientForm;
