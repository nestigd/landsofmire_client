import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(email, password);
  };

  return (
    <div className="auth-container">
      <form className="auth login">
        <input
          placeholder="email"
          type="email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <input
          placeholder="password"
          type="password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" className="main-button" onClick={handleSubmit}>
          Log in
        </button>
      </form>
    </div>
  );
};

export default Login;
