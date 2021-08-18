import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { Button, Block } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const success = false;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } = props;

  return (
    <div>
      <div className="auth__top">
        <h2>Регистрация</h2>
        <p>Для входа в чат, вам нужно зарегистрироваться</p>
      </div>
      <Block>
        {!success ? (
          <Form
            onSubmit={handleSubmit}
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}>
            <Form.Item
              validateStatus={!touched.email ? '' : errors.email ? 'error' : 'success'}
              hasFeedback
              help={!touched.email ? undefined : errors.email}>
              <Input
                id="email"
                prefix={<MailOutlined className="site-form-item-icon" />}
                placeholder="E-Mail"
                size="large"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="username">
              <Input
                prefix={<UserOutlined className="site-form-item-icon" />}
                type="username"
                placeholder="Ваше Имя"
                size="large"
              />
            </Form.Item>
            <Form.Item
              validateStatus={!touched.password ? '' : errors.password ? 'error' : 'success'}
              hasFeedback
              name="password"
              help={!touched.password ? undefined : errors.password}>
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Пароль"
                size="large"
                id="password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </Form.Item>
            <Form.Item name="passwordR">
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Повторите пароль"
                size="large"
              />
            </Form.Item>
            <Form.Item>
              <Button onClick={handleSubmit} type="primary" size="large">
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
};

export default RegisterForm;