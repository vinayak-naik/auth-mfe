import { Formik } from 'formik';
import { loginFormInitialValues } from '../../data/initialValues';
import styles from './login.module.css';
import { getFormikErrors } from '../../utils';
import { TextInput } from '../../components/reusable/base/index';
import {
  FormHeaderBox,
  FormikForm,
  LoginSubmitButton,
} from '../../components/login/loginForm';
import { loginFormSchema } from '../../schema';

const LoginForm = (props) => {
  const { loading, onSubmit } = props;

  return (
    <Formik
      className={styles.formik}
      initialValues={loginFormInitialValues}
      validationSchema={loginFormSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { email, password } = getFormikErrors(
          formik,
          loginFormInitialValues,
        );
        return (
          <FormikForm>
            <FormHeaderBox>Login</FormHeaderBox>
            <TextInput
              label="email"
              {...formik.getFieldProps('email')}
              error={email}
            />

            <TextInput
              label="password"
              {...formik.getFieldProps('password')}
              error={password}
            />

            <LoginSubmitButton>
              {loading ? 'submitting...' : 'Submit'}
            </LoginSubmitButton>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default LoginForm;
