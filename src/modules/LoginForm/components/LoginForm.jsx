import React, { Component } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

class LoginForm extends Component {
  render() {
    return (
      <div>
        <div className="auth__top">
          <h2>Войти в аккаунт</h2>
          <p>Пожалуйста, войдите в свой аккаунт</p>
        </div>
        <Block>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
              name="username"
              validateStatus="success"
              hasFeedback
              rules={[{ required: true, message: 'Please input your Username!' }]}>
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                size="large"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Please input your Password!' }]}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button type="primary" size="large">
                Войти в аккаунт
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/register">
              Зарегистрироваться
            </Link>
          </Form>
        </Block>
      </div>
    );
  }
}

export default LoginForm;
