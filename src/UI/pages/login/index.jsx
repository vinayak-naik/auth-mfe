import { useState } from 'react';
import { login } from '../../api/auth';
import { LoginContainer, LoginFormBox } from '../../components/login';
import LoginForm from './loginForm';
import { SnackbarComponent } from '../../components/reusable/snackbar';

function LoginPage() {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const onSubmit = async (inputData) => {
    try {
      setLoading(true);
      await login(inputData);
      setLoading(false);
      setSnackbar({ type: 'success', message: 'Logged in Successfully' });
      setTimeout(() => {
        window.location.replace('/');
      }, 1500);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <LoginContainer>
      <LoginFormBox>
        <LoginForm onSubmit={(data) => onSubmit(data)} loading={loading} />
      </LoginFormBox>
      <SnackbarComponent snackbar={snackbar} setSnackbar={setSnackbar} />
    </LoginContainer>
  );
}

export default LoginPage;
