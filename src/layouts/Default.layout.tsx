import React, { ReactNode } from "react";
import NavBar from "../components/NavBar";

interface DefaultLayoutProps {
  children: ReactNode;
}

const DefaultLayout: React.FC<DefaultLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar title="CB" backgroundColor="bg-primary"/>
      <div className="container mx-auto p-4">
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
