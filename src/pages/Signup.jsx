import { useState } from "react";
import { useSignup } from "../hooks/useSignup";

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
        <button
          type="submit"
          className="main-button"
          onClick={handleSubmit}
          disabled={isLoading}
        >
          Sign up
        </button>
        {error && <p className="error"> {error} </p>}
      </form>
    </div>
  );
};

export default Signup;
