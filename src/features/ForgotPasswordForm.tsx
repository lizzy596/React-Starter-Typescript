import React, { useEffect, useState} from 'react';
import Form from '../components/Form/Form';
import FormInput from '../components/Form/FormInput';
import useFormValidation from '../hooks/useFormValidation';
import authService from '../services/auth.service';




  const ForgotPasswordForm: React.FC = () => {
  const forgottenPasswordInput = {email:''};



  const { values, errors, handleChange, validate } = useFormValidation(forgottenPasswordInput);
  const [show, setShow] = useState(false);


  useEffect(() => {
    
  }, [show])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validate()) {
     try {
         await authService.forgotPassword(values.email)
         setShow(true);

     } catch (err) {
      console.error('error', err);
     }

    }
  };

  return (
  <>
 {show ? <div>If the email address you provided is associated with an account, a reset password will link will be sent to your inbox</div> :
    <Form onSubmit={handleSubmit} title={"Forgot Password"} className="max-w-md mx-auto p-12 bg-gray-200">
   
      <FormInput
        label="Email"
        name="email"
        value={values.email}
        onChange={handleChange}
        error={errors.email}
      />
     <div className="flex justify-center">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 m-2 rounded hover:bg-blue-600 focus:outline-none"
        >
          Submit
        </button>
      </div>
    </Form>}
    </>
  );
};

export default ForgotPasswordForm;