const AuthForm = (props) => {

  const {heading, email, setEmail, password, setPassword, error, isLoading, handleSubmit} = props.props; 

  return (
    <form className="auth">
      <h2>{heading}</h2>
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
          Submit
        </button>
        {error && <p className="error"> {error} </p>}
      </form>
  )}

export default AuthForm;