import { Typography } from 'antd';
import VaccineForm from '../../components/vaccineForm/VaccineForm';

import './VaccineCreate.css';

const VaccineCreate = () => {
  const { Title } = Typography;
  return (
    <div className="addVaccine center">
      <Title className="addVaccine__title">Add Vaccine Service</Title>
      <VaccineForm create={true} />
    </div>
  );
};

export default VaccineCreate;
