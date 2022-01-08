import React, { useState } from "react";
import "./style.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
  };

  return (
    <div id="login">
      <div className="cabecalho">
        <h1>SGI - Login</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div">
          <label for="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="senha">Senha</label> <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="submit" id="buttonLogin" value="Login" />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
