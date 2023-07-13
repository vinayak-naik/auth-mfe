import React from 'react';
import { Form } from 'formik';
import styles from './signup.module.css';

const FormikForm = (props) => {
  const { children } = props;
  return <Form id={styles.formBox}>{children}</Form>;
};
const FormHeaderBox = (props) => {
  const { children } = props;
  return (
    <div id={styles.formHeaderBox}>
      <h2>{children}</h2>
    </div>
  );
};

const SignupSubmitButton = (props) => {
  const { children } = props;
  return (
    <button type="submit" id={styles.submitButton}>
      {children}
    </button>
  );
};

export { FormikForm, FormHeaderBox, SignupSubmitButton };
