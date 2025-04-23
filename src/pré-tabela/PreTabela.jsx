import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PreTabela.scss"; 
import logo from "../assets/images/logo_orea.png";

const PreTabela = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div className="pre-tabela-container">
      <div className="div_fots">
        <img
          className="img"
          src={logo}
          style={{ width: 101, height: 94, flexShrink: 0 }}
          alt=""
        />
        <p>DesenrolaJá</p>
      </div>
      <h2>OPÇÕES</h2>
      <div className="options">
        <Link to="/servicos" className="option">
          Serviços
        </Link>
        <Link to="/clientes" className="option">
          Clientes
        </Link>
      </div>

      <button className="btn-logout" onClick={handleLogout}>
        Sair
      </button>
    </div>
  );
};

export default PreTabela;
