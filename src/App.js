// router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// pages
import Home from "./pages/Home";
import Store from "./pages/Store";
import Game from "./pages/Game";
import Lore from "./pages/Lore";
import Signup from "./pages/Signup";

// components
import Navbar from "./components/Navbar";
import Login from "./pages/Login";

// context
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className="pages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/game"
              element={user ? <Game /> : <Navigate to="/login" />}
            />
            <Route
              path="/store"
              element={user ? <Store /> : <Navigate to="/login" />}
            />
            <Route path="/lore" element={<Lore />} />
            <Route
              path="/signup"
              element={user ? <Navigate to="/" /> : <Signup />}
            />
            <Route
              path="/login"
              element={user ? <Navigate to="/" /> : <Login />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
