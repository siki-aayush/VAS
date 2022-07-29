import { Typography } from 'antd';
import React from 'react';
import AppointmentScheduleForm from '../../components/userAppointmentForm/AppointmentScheduleForm';

import './ScheduleForm.css';
const ScheduleForm = () => {
  const { Title } = Typography;
  return (
    <div className="user-appointment">
      <Title level={1} className="user-appointment__title">
        Schedule an Appointment
      </Title>
      <AppointmentScheduleForm />
    </div>
  );
};

export default ScheduleForm;
