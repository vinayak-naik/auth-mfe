import { Container, Paper } from '@mui/material';
import React from 'react';
import styles from './signup.module.css';

const SignupContainer = (props) => {
  const { children } = props;
  return (
    <Container maxWidth="xs" id={styles.signupContainer}>
      {children}
    </Container>
  );
};
const SignupFormBox = (props) => {
  const { children } = props;
  return <Paper id={styles.signupFormBox}>{children}</Paper>;
};

export { SignupContainer, SignupFormBox };
