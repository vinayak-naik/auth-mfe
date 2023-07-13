import { useState } from 'react';
import { signup } from '../../api/auth';
import { SignupContainer, SignupFormBox } from '../../components/signup';
import SignupForm from './signupForm';

function SignupPage() {
  const [loading, setLoading] = useState(false);

  const onSubmit = async (inputData) => {
    try {
      setLoading(true);
      const result = await signup(inputData);
      console.log(result);
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
    </SignupContainer>
  );
}

export default SignupPage;
