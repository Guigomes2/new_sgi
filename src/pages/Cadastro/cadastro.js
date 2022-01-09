import React, { useState } from "react";
import "./style.css";

const Cadastro = () => {
  return (
    <div id="cadastro">
      <div className="cabeçalhoCadastro">
        <h1>Nova empresa</h1>
      </div>

      <form className="cadastroForm">
        <label for="nome">Razão Social</label>
        <input type="text" id="social" name="social"></input>
        <label for="nome">Nome fantasia</label>
        <input type="text" id="fantasia" name="fantasia"></input>
        <label for="nome">CNPJ</label>
        <input type="number" id="cnpj" name="cnpj"></input>
        <label for="nome">Email</label>
        <input type="email" id="emailEmpersa" name="emailEmpresa"></input>{" "}
        <label for="nome">CEP</label>
        <input type="number" id="cep" name="cep"></input>
        <label for="nome">Endereço</label>
        <input type="text" id="endereco" name="endereco"></input>
        <label for="nome">Número</label>
        <input type="number" id="numero" name="numero"></input>
        <label for="nome">Complemento</label>
        <input type="text" id="complemento" name="complemento"></input>{" "}
        <label for="nome">Bairro</label>
        <input type="text" id="bairro" name="bairro"></input>
        <label for="nome">Cidade</label>
        <input type="text" id="cidade" name="cidade"></input>{" "}
        <label for="nome">Latitude</label>
        <input type="number" id="latitude" name="latitude"></input>
        <label for="nome">Longitude</label>
        <input type="number" id="longitude" name="longitude"></input>
        <input type="submit" id="buttonCadastra" value="Cadastrar"></input>
        <input type="submit" id="buttonCncelar" value="Cancelar"></input>
      </form>
    </div>
  );
};

export default Cadastro;
