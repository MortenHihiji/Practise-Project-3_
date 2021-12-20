import React from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block } from 'components';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { validateField } from 'utils/helpers';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const LoginForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isValid, isSubmitting } =
    props;

  return (
    <div>
      <div className="auth__top">
        <h2>Войти в аккаунт</h2>
        <p>Пожалуйста, войдите в свой аккаунт</p>
      </div>
      <Block>
        <Form
          onSubmit={handleSubmit}
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}>
          <Form.Item
            validateStatus={validateField('email', touched, errors)}
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
          <Form.Item
            validateStatus={validateField('password', touched, errors)}
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
          <Form.Item>
            {isSubmitting && !isValid && <span>Ошибка!</span>}
            <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" size="large">
              Войти в аккаунт
            </Button>
          </Form.Item>

          <Link className="auth__register-link" to="/signup">
            Зарегестрироваться
          </Link>
        </Form>
      </Block>
    </div>
  );
};

export default LoginForm;
