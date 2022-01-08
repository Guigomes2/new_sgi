import React from "react";

const Cadastro=() => {
    return (
        <form>
            <div>

                <div>
                    <h2>Nova empresa</h2> <hr></hr>
                    <label for="nome">Razão Social</label> <br></br>
                    <input type="text" id="social" name="social"></input> <br></br>

                    <label for="nome">Nome fantasia</label> <br></br>
                    <input type="text" id="fantasia" name="fantasia"></input> <br></br>

                    <label for="nome">CNPJ</label> <br></br>
                    <input type="number" id="cnpj" name="cnpj"></input> <br></br>

                    <label for="nome">Email</label> <br></br>
                    <input type="email" id="emailEmpersa" name="emailEmpresa"></input> <br></br> <hr></hr>

                    <label for="nome">CEP</label> <br></br>
                    <input type="number" id="cep" name="cep"></input> <br></br>

                    <label for="nome">Endereço</label> <br></br>
                    <input type="text" id="endereco" name="endereco"></input> <br></br>

                    <label for="nome">Número</label> <br></br>
                    <input type="number" id="numero" name="numero"></input> <br></br>

                    <label for="nome">Complemento</label> <br></br>
                    <input type="text" id="complemento" name="complemento"></input> <br></br>

                    <label for="nome">Bairro</label> <br></br>
                    <input type="text" id="bairro" name="bairro"></input> <br></br>

                    <label for="nome">Cidade</label> <br></br>
                    <input type="text" id="cidade" name="cidade"></input> <br></br> <hr></hr>

                    <label for="nome">Latitude</label> <br></br>
                    <input type="number" id="latitude" name="latitude"></input> <br></br>

                    <label for="nome">Longitude</label> <br></br>
                    <input type="number" id="longitude" name="longitude"></input> <br></br>

                    <input type="submit" id="buttonCadastra" value="Cadastrar"></input>
                    <input type="submit" id="buttonCncelar" value="Cancelar"></input>

                </div>

            </div>
        </form>
    );

}

export default Cadastro;

