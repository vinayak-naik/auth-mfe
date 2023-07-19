import { useState } from 'react';
import { signup } from '../../api/auth';
import { SignupContainer, SignupFormBox } from '../../components/signup';
import SignupForm from './signupForm';
import { SnackbarComponent } from '../../components/reusable/snackbar';

function SignupPage() {
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({});

  const onSubmit = async (inputData) => {
    try {
      setLoading(true);
      await signup(inputData);
      setLoading(false);
      setSnackbar({ type: 'success', message: 'Registered Successfully' });
      setTimeout(() => {
        window.location.replace('/auth/login');
      }, 1500);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };
  return (
    <SignupContainer>
      <SignupFormBox>
        <SignupForm onSubmit={(data) => onSubmit(data)} loading={loading} />
      </SignupFormBox>
      <SnackbarComponent snackbar={snackbar} setSnackbar={setSnackbar} />
    </SignupContainer>
  );
}

export default SignupPage;
