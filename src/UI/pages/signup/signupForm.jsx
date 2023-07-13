import { Formik } from 'formik';
import { signupFormInitialValues } from '../../data/initialValues';
import { getFormikErrors } from '../../utils';
import { TextInput } from '../../components/reusable/base';
import {
  FormHeaderBox,
  FormikForm,
  SignupSubmitButton,
} from '../../components/signup/signupForm';
import { signupSchema } from '../../schema';

const SignupForm = (props) => {
  const { loading, onSubmit } = props;

  return (
    <Formik
      initialValues={signupFormInitialValues}
      validationSchema={signupSchema}
      onSubmit={onSubmit}
    >
      {(formik) => {
        const { username, email, password } = getFormikErrors(
          formik,
          signupFormInitialValues,
        );
        return (
          <FormikForm>
            <FormHeaderBox>Sign up</FormHeaderBox>
            <TextInput
              label="username"
              {...formik.getFieldProps('username')}
              error={username}
            />
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
            <SignupSubmitButton>
              {loading ? 'submitting...' : 'Submit'}
            </SignupSubmitButton>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default SignupForm;
