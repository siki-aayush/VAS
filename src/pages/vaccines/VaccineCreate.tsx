import Rveact from 'react';
import VaccineForm from '../../components/vaccineForm/VaccineForm';
import { Typography } from 'antd';

import './VaccineCreate.css';

const VaccineCreate = () => {
  const { Title } = Typography;
  return (
    <div className="addVaccine center">
      <Title className="addVaccine__title">Add Vaccine Service</Title>
      <VaccineForm />
    </div>
  );
};

export default VaccineCreate;
