import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import AuthForm from "../components/AuthForm";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  /* custom useSignup hook gives us access to a function and 2 states.
  the function updates the Auth Context with the user email and JWT 
  token if signup is successful while the 2 variables let us know how 
  the login process is going.*/
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <div className="auth-container">
      <AuthForm 
        props={
          {
          heading:"Sign up",
          email, setEmail, 
          password, setPassword, 
          error, isLoading, handleSubmit}
        }
      />
    </div>
  );
};

export default Signup;
