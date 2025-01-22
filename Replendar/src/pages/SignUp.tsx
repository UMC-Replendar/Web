import React from 'react';
import SignupForm from '../components/signupComponents/SignupForm';
import Modal from '../modal/Modal';

const Signup: React.FC = () => {
  return (
    <>
      <SignupForm />
      <Modal />
    </>
  );
};

export default Signup;
