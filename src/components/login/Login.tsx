import { Button, Form, Input } from 'antd';
import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { loginCtx, loginCtxInterface } from '../../contexts';
import { addUserLoginToLocalStorage } from '../../utils/localstorage.util';
import './Login.css';

interface loginDetailInterface {
  username: string;
  password: string;
}
export const Login: React.FC = () => {
  const { isUserLoggedIn, setIsUserLoggedIn } = useContext(loginCtx) as loginCtxInterface;
  const [msg, setMsg] = useState<string>('');
  const navigate = useNavigate();

  const onFinish = (values: loginDetailInterface) => {
    console.log('values', values);
    if (values.username === 'user' && values.password === 'password') {
      setIsUserLoggedIn(true);
      addUserLoginToLocalStorage('true');
      navigate('/');
    } else {
      setMsg('Incorrect username or password');
    }
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
          <div style={{ textAlign: 'center', color: 'red' }}>{msg}</div>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="login__submit">
              Log in
            </Button>
          </Form.Item>
        </Form>
        <div className="card__footer">
          Don't have an account?{' '}
          <span>
            <Link to="#">Sign up for free</Link>
          </span>
        </div>
      </div>
    </div>
  );
};
