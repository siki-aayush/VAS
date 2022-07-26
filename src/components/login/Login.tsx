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
    <div className="wrapper">
      <div className="card">
        <h1 className="card__title">
          Welcome to <span>VAS</span>
        </h1>
        <Form
          layout="vertical"
          size="large"
          name="login"
          // labelCol={{ span: 8 }}
          // wrapperCol={{ span: 18 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          className="login"
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input className="login__username" />
          </Form.Item>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password className="login__password" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login__submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="card__footer">
          Don't have an account? <span>Sign up for free</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
