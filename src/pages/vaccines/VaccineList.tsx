import { Space, Table } from 'antd';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import reqInstance from '../../axios/axios';
import { vaccineServiceWithId } from '../../interfaces';

const VaccineList = () => {
  const columns = [
    {
      title: 'Service Name',
      dataIndex: 'service_name',
      key: 'service_name',
    },
    {
      title: 'Site Location',
      dataIndex: 'site_location',
      key: 'site_location',
    },
    {
      title: 'Distribution Start Date',
      dataIndex: 'dist_start_date',
      key: 'dist_start_date',
    },
    {
      title: 'Distribution End Date',
      dataIndex: 'dist_end_date',
      key: 'dist_end_date',
    },
    {
      title: 'Doses',
      dataIndex: 'doses',
      key: 'doses',
    },
    {
      title: 'Gender',
      dataIndex: 'gender',
      key: 'gender',
    },
    {
      title: 'Ethnicity',
      dataIndex: 'ethnicity',
      key: 'ethnicity',
    },
    {
      title: 'Minimum Age',
      dataIndex: 'min_age',
      key: 'min_age',
    },
    {
      title: 'Actions',
      key: 'action',
      render: (_: any, record: vaccineServiceWithId) => (
        <Space size="middle">
          <Link to={`/vaccines/${record.id}`}>Edit</Link>
          <p>Delete</p>
        </Space>
      ),
    },
  ];

  const [vaccineServices, setVacinneServices] = useState<vaccineServiceWithId[]>();

  useEffect(() => {
    try {
      reqInstance('/vaccine-services')
        .then(resp => {
          console.log(resp.data);
          setVacinneServices(resp.data.data);
        })
        .catch(err => console.log(err));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return <Table columns={columns} dataSource={vaccineServices} />;
};

export default VaccineList;
