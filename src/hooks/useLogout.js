import { useAuthContext } from "./useAuthContext";

export const useLogout = ()=>{

  // destructure the dispatch function from the useAuthContext hook
  const {dispatch} = useAuthContext();

  const logout = ()=>{
    console.log("logging out")
    // next time the browser won't have the JWT token
    localStorage.removeItem("user");

    // set user context to logged out state
    dispatch({type: "LOGOUT"})
    console.log("logged out")
  }

  return {logout}
}