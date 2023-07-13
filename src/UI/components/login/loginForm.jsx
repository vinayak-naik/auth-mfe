import React from 'react';
import { Form } from 'formik';
import styles from './login.module.css';

const FormikForm = (props) => {
  const { children } = props;
  return <Form className={styles.formBox}>{children}</Form>;
};
const FormHeaderBox = (props) => {
  const { children } = props;
  return (
    <div id={styles.formHeaderBox}>
      <h2>{children}</h2>
    </div>
  );
};

const LoginSubmitButton = (props) => {
  const { children } = props;
  return (
    <button type="submit" id={styles.submitButton}>
      {children}
    </button>
  );
};

export { FormikForm, FormHeaderBox, LoginSubmitButton };
