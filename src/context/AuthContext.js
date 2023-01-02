import { useEffect } from "react";
import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    // if there is no match, just return the original state
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  // initialize user to empty string & create dispatch function
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
  });

  // check if user is authenticated already, in that case update the app logging the user in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log("AuthContext state: ", state);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
