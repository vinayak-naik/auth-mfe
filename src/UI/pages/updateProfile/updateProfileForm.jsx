import { Formik } from 'formik';
import styles from './updateProfile.module.css';
import { getFormikErrors } from '../../utils';
import {
  BottonBox,
  TextInput,
  TwoColumnInputBox,
} from '../../components/reusable/base/index';
import {
  FormHeaderBox,
  FormikForm,
  SelectAccountType,
  SelectLanguage,
  UpdateProfileSubmitButton,
} from '../../components/updateProfile/updateProfileForm';
import { updateProfileFormSchema } from '../../schema';
import { updateProfileFormInitialValues } from '../../data/initialValues';
// import { updateProfileFormInitialValues } from '../../data/initialValues';

const UpdateProfileForm = (props) => {
  const { loading, onSubmit, user } = props;

  const userData = {
    firstName: user.firstName,
    lastName: user.lastName,
    username: user.username,
    email: user.email,
    accountType: user.attributes ? user.attributes.accountType[0] : '',
    language: user.attributes ? user.attributes.language[0] : '',
  };

  return (
    <Formik
      className={styles.formik}
      initialValues={userData}
      validationSchema={updateProfileFormSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={() => console.log('validateOnChange')}
    >
      {(formik) => {
        const { firstName, lastName, username, email } = getFormikErrors(
          formik,
          updateProfileFormInitialValues,
        );
        return (
          <FormikForm>
            <FormHeaderBox>User Profile</FormHeaderBox>
            <TwoColumnInputBox>
              <TextInput
                label="firstName"
                {...formik.getFieldProps('firstName')}
                error={firstName}
              />
              <TextInput
                label="lastName"
                {...formik.getFieldProps('lastName')}
                error={lastName}
              />
            </TwoColumnInputBox>

            <TextInput
              label="username"
              {...formik.getFieldProps('username')}
              error={username}
              disabled
            />
            <TextInput
              label="email"
              {...formik.getFieldProps('email')}
              error={email}
              disabled
            />
            <SelectAccountType
              label="Account Type"
              formikProps={formik.getFieldProps('accountType')}
            />
            <SelectLanguage
              label="Language"
              formikProps={formik.getFieldProps('language')}
            />
            <BottonBox right>
              <UpdateProfileSubmitButton>
                {loading ? 'UPDATING...' : 'UPDATE'}
              </UpdateProfileSubmitButton>
            </BottonBox>
          </FormikForm>
        );
      }}
    </Formik>
  );
};

export default UpdateProfileForm;
