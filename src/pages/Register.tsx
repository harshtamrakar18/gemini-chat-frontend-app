
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AuthForm mode="register" />
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">Already have an account? </span>
            <Link to="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
