import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';

export default withFormik({
  validate: (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = 'Введите почту';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Неверное название почты, попробуйте еще раз';
    }
    console.log(values, 333);

    if (!values.password) {
      errors.password = 'Введите пароль';
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(values.password)
    ) {
      errors.password = 'Слишком лёгкий паорль';
    }

    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },
  displayName: 'RegisterForm',
})(RegisterForm);
