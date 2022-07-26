import React from 'react';
import { Button, List, Typography } from 'antd';
import './ListSchedules.css';

const data = ['schedules1', 'schedules2', 'schedules3', 'schedules4', 'schedules5'];

const ListSchedules = () => {
  const { Title } = Typography;
  const onEdit = () => {
    console.log('editing');
  };

  const onDelete = () => {
    console.log('delete');
  };

  return (
    <div className="schedules">
      <List
        size="large"
        loading={false}
        itemLayout="horizontal"
        bordered
        header={<Title>Appointments</Title>}
        // footer={<div>Footer</div>}
        dataSource={data}
        renderItem={item => (
          <List.Item
            style={{ height: '80px' }}
            actions={[
              <Button key="list-loadmore-edit" type="link" onClick={onEdit}>
                Edit
              </Button>,
              <Button key="list-loadmore-more" type="link" danger onClick={onDelete}>
                Delete
              </Button>,
            ]}
          >
            <div>{item}</div>
          </List.Item>
        )}
      />
    </div>
  );
};

export default ListSchedules;
