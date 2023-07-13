import { useState } from 'react';
import { login } from '../../api/auth';
import { LoginContainer, LoginFormBox } from '../../components/login';
import LoginForm from './loginForm';

function LoginPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (inputData) => {
    try {
      setLoading(true);
      await login(inputData);
      setLoading(false);
      // setTimeout(() => {
      //   // navigate('/auth/update-profile');
      //   navigate.toString();
      //   alert('aa');
      //   window.location.replace('/auth/update-profile');
      // }, 3000);
      window.location.replace('/');
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
    </LoginContainer>
  );
}

export default LoginPage;
