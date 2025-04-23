import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import img_cliente from "../assets/images/img_servico.png";
import "./ClientesInicial.scss";

function ClientesInicial() {
  const [clientes, setClientes] = useState([]);
  //const API_URL = "http://localhost:3010";
  const API_URL = "http://20.83.237.168:3010";

  const consultarClientes = async () => {
    try {
      const response = await axios.get(`${API_URL}/consultar-cliente`);
      setClientes(response.data);
    } catch (error) {
      console.error("Erro ao buscar clientes:", error);
    }
  };

  useEffect(() => {
    consultarClientes();
  }, []);

  return (
    <div className="clientes-inicial">
      <div className="div_fots">
        <img
          className="img"
          src={img_cliente}
          style={{ paddingLeft: 80, width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Clientes</h1>
      </div>
      <div className="clientes-container">
        <div className="clientes-buttons">
          <Link to="/cadastrar-cliente">
            <button className="btn_cadastrar_excluir">Cadastrar</button>
          </Link>
          <Link to="/excluir-cliente">
            <button className="btn_cadastrar_excluir">Excluir</button>
          </Link>
          <Link to="/consultar-cliente">
            <button className="btn_consultar_alterar">Consultar</button>
          </Link>
          <Link to="/alterar-cliente">
            <button className="btn_consultar_alterar">Alterar</button>
          </Link>
          <Link to="/pre-tabela">
            <button className="btn_retornar_menu">Retornar ao Menu</button>
          </Link>
        </div>
        <div className="clientes-lista">
          <h2>Clientes Cadastrados:</h2>
          <table className="clientes-tabela">
            <thead>
              <tr>
                <th>ID Cliente</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Comentário</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id_cli}</td>
                  <td>{cliente.ds_nome}</td>
                  <td>{cliente.ds_email_cli}</td>
                  <td>{cliente.ds_num_cli}</td>
                  <td>{cliente.ds_comentario}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ClientesInicial;
