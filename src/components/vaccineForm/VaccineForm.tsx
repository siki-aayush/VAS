import React from 'react';
import { Button, Form, Input, InputNumber, Select, DatePicker, Checkbox, Row, Col, Typography } from 'antd';
import './VaccineForm.css';
import { vaccineService } from '../../interfaces';

const VaccineForm = () => {
  const { Option } = Select;
  const { RangePicker } = DatePicker;
  const { Title } = Typography;

  const onFinish = (values: vaccineService) => {
    console.log(values);
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
      <Form.Item name="name" label="Vaccine Name" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item name="location" label="Site Location" rules={[{ required: true }]}>
        <Input />
      </Form.Item>

      <Form.Item
        name="duration"
        label="Distribution date"
        rules={[{ type: 'array' as const, required: true, message: 'Please select time!' }]}
      >
        <RangePicker showTime format="YYYY-MM-DD HH:mm:ss" />
      </Form.Item>

      <Title level={4} className="ant-col-8 vaccineForm__eligible">
        Eligible Criteria
      </Title>
      <Form.Item name="gender" label="Gender" rules={[{ required: true, message: 'Please select gender!' }]}>
        <Select placeholder="select your gender">
          <Option value="male">Male Only</Option>
          <Option value="female">Female Only</Option>
          <Option value="other">Both</Option>
        </Select>
      </Form.Item>

      <Form.Item name={'age'} label="Minimum Age" rules={[{ type: 'number', min: 0, max: 130 }]}>
        <InputNumber />
      </Form.Item>

      <Form.Item name="ethnicity" label="Ethnicity">
        <Checkbox.Group>
          <Row>
            <Col span={8}>
              <Checkbox value="asian" style={{ lineHeight: '32px' }}>
                Asian
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="white" style={{ lineHeight: '32px' }}>
                White
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="black" style={{ lineHeight: '32px' }}>
                Black
              </Checkbox>
            </Col>
            <Col span={12}>
              <Checkbox value="americanIndian" style={{ lineHeight: '32px' }}>
                American Indian
              </Checkbox>
            </Col>
            <Col span={8}>
              <Checkbox value="pacific" style={{ lineHeight: '32px' }}>
                Pacific
              </Checkbox>
            </Col>
          </Row>
        </Checkbox.Group>
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
