import React, { useState } from "react";
import { useStytch } from "@stytch/react";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const stytchClient = useStytch();

  const resetPasswordByEmail = () => {
    stytchClient.passwords.resetByEmail({
      email: "dusancar123321@gmail.com",
    });
  };

  const login = () => {
    stytchClient.passwords.authenticate({
      email,
      password,
      session_duration_minutes: 60,
    });
  };

  return (
    <div>
      <input placeholder="Email.." onChange={(e) => setEmail(e.target.value)} />
      <input
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login}>Login</button>
      <div>
        <p>Forgot your password ? </p>
        <button onClick={resetPasswordByEmail}>Resset Password</button>
      </div>
    </div>
  );
};
