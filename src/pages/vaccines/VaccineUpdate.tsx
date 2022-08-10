import React, { useEffect, useState } from 'react';
import VaccineForm from '../../components/vaccineForm/VaccineForm';
import { Typography } from 'antd';
import moment from 'moment';

import './VaccineCreate.css';
import reqInstance from '../../axios/axios';
import { vaccineServiceWithId } from '../../interfaces';
import { useNavigate, useParams } from 'react-router-dom';

const VaccineUpdate = () => {
  const { id } = useParams();
  const { Title } = Typography;
  const navigate = useNavigate();
  const [vaccineService, setVaccineService] = useState<vaccineServiceWithId>();

  useEffect(() => {
    reqInstance(`/vaccine-services/${id}`, {
      method: 'GET',
    })
      .then(res => {
        const existingData = {
          ...res.data.data,
          duration: [moment(res.data.data.dist_start_date), moment(res.data.data.dist_end_date)],
        };

        setVaccineService(existingData);
        console.log('data fetched', existingData);
      })
      .catch(error => {
        console.log('error', error);
        navigate('/vaccines');
      });
  }, [id, navigate]);

  return (
    <div className="addVaccine center">
      <Title className="addVaccine__title">Add Vaccine Service</Title>
      {vaccineService && <VaccineForm initialValues={vaccineService} create={false} />}
    </div>
  );
};

export default VaccineUpdate;
