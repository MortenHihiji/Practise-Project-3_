import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

class RegisterForm extends React.Component {
  render() {
    const success = false;
    return (
      <div>
        <div className="auth__top">
          <h2>Регистрация</h2>
          <p>Для входа в чат, вам нужно зарегистрироваться</p>
        </div>
        <Block>
          {!success ? (
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{ remember: true }}
              onFinish={onFinish}>
              <Form.Item
                name="mail"
                validateStatus="success"
                hasFeedback
                rules={[{ required: true, message: 'Please input your E-Mail!' }]}>
                <Input
                  prefix={<MailOutlined className="site-form-item-icon" />}
                  placeholder="E-Mail"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  type="username"
                  placeholder="Ваше Имя"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Пароль"
                  size="large"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}>
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Повторите пароль"
                  size="large"
                />
              </Form.Item>
              <Form.Item>
                <Button type="primary" size="large">
                  Зарегистрироваться
                </Button>
              </Form.Item>

              <Link className="auth__register-link" to="/login">
                Войти в аккаунт
              </Link>
            </Form>
          ) : (
            <div className="auth__success-block">
              <div>
                <InfoCircleTwoTone />
              </div>
              <h2>Подтвердите свой аккаунт</h2>
              <p>На Вашу почту отправлено письмо с ссылкой на подтверждение аккаунта.</p>
            </div>
          )}
        </Block>
      </div>
    );
  }
}

export default RegisterForm;
