import "./App.css";
import { Login } from "./pages/Login";
import { SignUp } from "./pages/SignUp";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { ResetPassword } from "./pages/ResetPassword";
import { StytchHeadlessClient } from "@stytch/vanilla-js/headless";
import { StytchProvider } from "@stytch/react";

function App() {
  const stytchClient = new StytchHeadlessClient(
    "public-token-test-356a9d6b-22ef-4b95-a56a-de8e4b8794a6"
  );

  const logout = () => {
    stytchClient.session.revoke();
  };

  return (
    <div className="App">
      <Router>
        <Link to="/signup"> SignUp</Link>
        <Link to="/auth"> Login</Link>
        <StytchProvider stytch={stytchClient}>
          <Routes>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/auth" element={<Login />} />
            <Route path="/resetpassword/*" element={<ResetPassword />} />
          </Routes>
          <button className="logout" onClick={logout}>
            Logout
          </button>
        </StytchProvider>
      </Router>
    </div>
  );
}

export default App;
