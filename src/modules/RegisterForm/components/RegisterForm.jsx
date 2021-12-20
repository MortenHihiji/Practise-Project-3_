import React from 'react';
import { Form } from 'antd';
import { Link } from 'react-router-dom';

import { Button, Block, FormField } from 'components';
import { UserOutlined, LockOutlined, MailOutlined, InfoCircleTwoTone } from '@ant-design/icons';

const onFinish = (values) => {
  console.log('Received values of form: ', values);
};

const success = false;

const RegisterForm = (props) => {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit, isSubmitting, isValid } =
    props;

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
            <FormField
              name="email"
              placeholder="E-Mail"
              Icon={<MailOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="fullname"
              placeholder="Ваше имя и фамилия"
              Icon={<UserOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="password"
              placeholder="Пароль"
              type="password"
              Icon={<LockOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <FormField
              name="password_2"
              placeholder="Повторите пароль"
              type="password"
              Icon={<LockOutlined className="site-form-item-icon" />}
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />

            <Form.Item>
              {isSubmitting && !isValid && <span>Ошибка!</span>}
              <Button disabled={isSubmitting} onClick={handleSubmit} type="primary" size="large">
                Зарегистрироваться
              </Button>
            </Form.Item>

            <Link className="auth__register-link" to="/signin">
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
