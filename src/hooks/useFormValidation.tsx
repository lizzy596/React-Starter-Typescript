import { useState } from 'react';

interface ValidationErrors {
  [key: string]: string;
}

const useFormValidation = (initialValues: { [key: string]: string }) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState<ValidationErrors>({});

  const validate = (): boolean => {
    const newErrors: ValidationErrors = {};

    Object.keys(values).forEach((key) => {
      if (!values[key]) {
        newErrors[key] = 'This field is required';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return {
    values,
    errors,
    handleChange,
    validate,
  };
};

export default useFormValidation;
