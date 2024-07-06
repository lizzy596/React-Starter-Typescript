import React from 'react';

interface FormProps {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  className?: string;
  title?: string; // New prop for the form title
}

const Form: React.FC<FormProps> = ({ children, onSubmit, className, title }) => {
  return (
    <form onSubmit={onSubmit} className={`p-4 bg-white shadow-md rounded-lg ${className}`}>
      {title && (
        <h2 className="text-lg font-semibold mb-4 text-center"> {/* Added text-center class */}
          {title}
        </h2>
      )}
      {children}
    </form>
  );
};

export default Form;

