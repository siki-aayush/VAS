import { Button, Form, Input } from 'antd';
import './Login.css';

const Login: React.FC = () => {
  const onFinish = () => {
    console.log('finish');
  };

  const onFinishFailed = () => {
    console.log('failed');
  };
  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 18 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      className="login"
    >
      <Form.Item name="username" label="Username" rules={[{ required: true, message: 'Please input your username!' }]}>
        <Input />
      </Form.Item>
      <Form.Item name="password" label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login__submit">
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
