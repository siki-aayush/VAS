import React from 'react';
import { Button, Form, Input, InputNumber, Select, DatePicker, Checkbox, Row, Col, Typography } from 'antd';
import './VaccineForm.css';
import { vaccineService } from '../../interfaces';
import reqInstance from '../../axios/axios';
import { useNavigate } from 'react-router-dom';

const VaccineForm = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { Title } = Typography;
  const navigate = useNavigate();

  const onFinish = async (values: vaccineService) => {
    const vaccineServiceData = {
      service_name: values.service_name,
      site_location: values.site_location,
      dist_start_date: values?.duration[0].format('YYYY-MM-DD'),
      dist_end_date: values?.duration[1].format('YYYY-MM-DD'),
      number_of_doses: values.number_of_doses,
      gender: values.gender,
      ethnicity: values.ethnicity,
      min_age: values.min_age,
    };

    const resp = await reqInstance('/vaccine-services', {
      method: 'POST',
      data: vaccineServiceData,
    });

    if (resp.data.data) {
      navigate('/vaccines');
    }
  };

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 12 },
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

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      validateMessages={validateMessages}
      size="large"
      className="vaccineForm"
    >
      <Form.Item name="service_name" label="Vaccine Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="site_location" label="Site Location" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="duration"
        label="Distribution date"
        rules={[{ type: 'array' as const, required: true, message: 'Please select time!' }]}
      >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Form.Item
        name="number_of_doses"
        label="Doses"
        rules={[{ required: true, type: 'number', message: 'Please input doses!', min: 0, max: 20 }]}
      >
        <InputNumber style={{ maxWidth: '80px' }} />
      </Form.Item>

      <Title level={4} className="ant-col-8 vaccineForm__eligible">
        Eligible Criteria
      </Title>
      <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male Only</Option>
          <Option value="female">Female Only</Option>
          <Option value="both">Both</Option>
        </Select>
      </Form.Item>

      <Form.Item name="min_age" label="Minimum Age" rules={[{ type: 'number', min: 0, max: 130 }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name="ethnicity" label="Ethnicity" rules={[{ required: true, message: 'Please select ethnicity!' }]}>
        <Select placeholder="select your ethnicity">
          <Option value="asian">Asian</Option>
          <Option value="white">White</Option>
          <Option value="black">Black</Option>
          <Option value="american_indian">American Indian</Option>
          <Option value="pacific">Pacific</Option>
        </Select>
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button type="primary" htmlType="submit" style={{ marginTop: '20px' }}>
          Add Service
        </Button>
      </Form.Item>
    </Form>
  );
};

export default VaccineForm;
