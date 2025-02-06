import React from 'react';
import SignupForm from '../components/signupComponents/SignupForm';
import Modal from '../modal/Modal';
import useAuthStore from '../store/authStore';

const Signup: React.FC = () => {
  const { token, email, id, nickname } = useAuthStore();

  console.log(token + '\n', email + '\n', id + '\n', nickname + '\n');
  return (
    <>
      <SignupForm />
      <Modal />
    </>
  );
};

export default Signup;
