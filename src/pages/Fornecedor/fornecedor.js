import React, { useState } from "react";
import "./style.css";

const Fornecedor = () => {
  return (
    
      <div id="fornecedor">
        <div className="cabeçalhoFornecedor">
          <h2>Novo Fornecedor</h2> 
        </div>

        <form className="formFornecedor">
          <label for="nome">Novo Fornecedor</label> 
          <input
            type="text"
            id="novoFornecedor"
            name="novoFornecedor"
          ></input>
          
          <label for="nome">Produto fornecido</label> 
          <input
            type="text"
            id="produtoFornecido"
            name="produtoFornecido"
          ></input>
          
          <label for="nome">Valor unitário do produto</label> 
          <input
            type="number"
            id="valorUnitario"
            name="valorUnitario"
          ></input>
          
          <label for="nome">Quantidade</label> 
          <input type="number" id="quantidade" name="quantidade" />
          
          <input
            type="submit"
            id="cadastrarFornecedor"
            value="Cadastrar"
          ></input>
          <input type="submit" id="cancelarFornecedor" value="Cancelar" />
        </form>
      </div>
    
  );
};

export default Fornecedor;

