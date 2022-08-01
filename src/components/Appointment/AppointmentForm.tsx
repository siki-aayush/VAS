import React from 'react';
import { Button, Form, Input, InputNumber, Select } from 'antd';
import { useDispatch } from 'react-redux';
import { setAppointment } from '../../reducers/appointmentSlice';

import './AppointmentForm.css';

const AppointmentForm = () => {
  const { Option } = Select;
  const dispatch = useDispatch();

  /*
   * List of all the vaccinations available
   */
  const vaccines: string[] = ['Pfizer', 'Verocel', 'JnJ', 'Astrozen'];

  /*
   * Default layout for all the forms
   */
  const layout = {
    labelCol: { span: 10 },
    wrapperCol: { span: 15 },
  };

  /* validateMessages
   * All the validation messages when the form
   * is filled with wrong data
   */
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

  /* onFinish
   * Handles the form data when the form
   * is submitted with all the valid data
   * @param {any} values
   */
  const onFinish = (values: any) => {
    dispatch(setAppointment(values));
  };

  return (
    <div className="appointment">
      <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages} size="large">
        <Form.Item
          name="patientId"
          label="Patient Id"
          rules={[{ required: true }]}
          wrapperCol={{ ...layout.wrapperCol }}
        >
          <Input />
        </Form.Item>

        <Form.Item name="location" label="Site Location">
          <Input />
        </Form.Item>

        <Form.Item label="Service Type">
          <Input.Group compact>
            <Form.Item name="serviceType" noStyle rules={[{ required: true, message: 'Province is required' }]}>
              <Select placeholder="Select Service Type">
                {vaccines.map(opt => (
                  <Option value={opt.toLowerCase()}>{opt}</Option>
                ))}
              </Select>
            </Form.Item>
          </Input.Group>
        </Form.Item>

        <Form.Item name="confirmation" label="Confirmation Code" rules={[{ type: 'number' }]}>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AppointmentForm;
