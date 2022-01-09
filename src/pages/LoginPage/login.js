import React, { useState, useContext } from "react";
import { AuthContext } from "../contexts/autenticacao";
import "./style.css";

const LoginPage = () => {
  const { autenticado, login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("submit", { email, password });
  };

  return (
    <div id="login">
      <div className="cabecalho">
        <h1>Sistema de Gestão Integrada - Login</h1>
      </div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="div">
          <label for="email">Email</label> <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label for="senha">Senha</label> <br></br>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
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
