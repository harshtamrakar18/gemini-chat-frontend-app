
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import AuthForm from "@/components/AuthForm";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-md">
          <AuthForm mode="login" />
          <div className="mt-4 text-center text-sm">
            <span className="text-muted-foreground">Don't have an account? </span>
            <Link to="/register" className="text-primary hover:underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
