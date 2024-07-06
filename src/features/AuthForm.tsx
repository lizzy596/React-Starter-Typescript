import React from 'react';
import Form from '../components/Form/Form';
import FormInput from '../components/Form/FormInput';
import useFormValidation from '../hooks/useFormValidation';
import authService from '../services/auth.service';
import { useNavigate } from "react-router-dom";






interface AuthFormProps {
  status?: string;
}


const loginInputs = {email: '', password: ''};
const registerInputs = {firstName: '', lastName: '', email: '', password: ''};

const AuthForm: React.FC<AuthFormProps> = ({status}) => {
  const navigate = useNavigate();

  const { values, errors, handleChange, validate } = useFormValidation(status ? registerInputs : loginInputs);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
     
      const response = status ? await authService.register(values) : await authService.login(values)
      navigate("/start");
    }
  };

  return (
    <Form onSubmit={handleSubmit} title={status ? "Register" : "Login"} className="max-w-md mx-auto p-12 bg-gray-200">
        {status && 
        <FormInput
        label="First Name"
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        type="text"
        error={errors.firstName}
      />}
      {status &&  <FormInput
        label="Last Name"
        name="lastName"
        value={values.lastName}
        onChange={handleChange}
        type="text"
        error={errors.lastName}
      />}
      <FormInput
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
      <FormInput
        label="Password"
        name="password"
        value={values.password}
        onChange={handleChange}
        type="password"
        error={errors.password}
      />
         {/* <FormInput
        label="Confirm Password"
        name="confirm password"
        value={values.password}
        onChange={handleChange}
        placeholder="Enter your password"
        type="password"
        error={errors.password}
      /> */}
  
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

export default AuthForm;

