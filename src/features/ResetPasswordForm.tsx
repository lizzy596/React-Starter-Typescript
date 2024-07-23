import React from 'react';
import Form from '../components/Form/Form';
import FormInput from '../components/Form/FormInput';
import useFormValidation from '../hooks/useFormValidation';
import authService from '../services/auth.service';
import { useNavigate, useLocation } from "react-router-dom";




  const ResetPasswordForm: React.FC= () => {
  const navigate = useNavigate();
  const resetPasswordInput = {newPassword:''};
  const { search } = useLocation();
  const param = new URLSearchParams(search);
  const token = param.get('token');


  const { values, errors, handleChange, validate } = useFormValidation(resetPasswordInput);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
     try {
          await authService.resetPassword(token!, values.newPassword )
         navigate("/login");
        } catch (err) {
      console.error('error', err);
     }

    
  };

  return (
    <Form onSubmit={handleSubmit} title={"Reset Password"} className="max-w-md mx-auto p-12 bg-gray-200">
   
      <FormInput
        label="New Password"
        name="newPassword"
        value={values.newPassword}
        onChange={handleChange}
        error={errors.newPassword}
      />
     <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </Form>
  );
};

export default ResetPasswordForm;