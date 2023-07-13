import { Container, Paper } from '@mui/material';
import React from 'react';
import styles from './login.module.css';

const LoginContainer = (props) => {
  const { children } = props;
  return (
    <Container maxWidth="xs" id={styles.loginContainer}>
      {children}
    </Container>
  );
};
const LoginFormBox = (props) => {
  const { children } = props;
  return <Paper id={styles.loginFormBox}>{children}</Paper>;
};

export { LoginContainer, LoginFormBox };
