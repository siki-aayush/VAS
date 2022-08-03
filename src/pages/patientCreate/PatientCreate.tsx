import { Typography } from 'antd';
import React from 'react';
import PatientForm from '../../components/patientForm/PatientForm';

const PatientCreate = () => {
  const { Title } = Typography;
  return (
    <div className="add-patient center">
      <Title className="add-patient__title">Add Patient</Title>
      <PatientForm />
    </div>
  );
};

export default PatientCreate;
