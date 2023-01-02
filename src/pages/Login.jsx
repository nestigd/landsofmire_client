import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import AuthForm from "../components/AuthForm";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="auth-container">
      <AuthForm
        props={{
          heading: "Log in",
          email,
          setEmail,
          password,
          setPassword,
          error,
          isLoading,
          handleSubmit,
        }}
      />
    </div>
  );
};

export default Login;
