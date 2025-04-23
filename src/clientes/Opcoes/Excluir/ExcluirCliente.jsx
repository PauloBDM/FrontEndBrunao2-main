import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ExcluirCliente.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { deletarCliente } from "../../../services/APIService";
import { toast } from "react-hot-toast";

const ExcluirCliente = () => {
  const [clienteId, setClienteId] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");


  const handleDelete = async () => {
    if (clienteId.trim() === "") {
      toast.error("Por favor, insira o ID do cliente que deseja excluir.");
      return;
    }

    try {
      const response = await deletarCliente(clienteId);
      toast.success(`Cliente com ID ${clienteId} foi excluído com sucesso!`);
      setError(""); 
      setClienteId(""); 
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error(`Cliente com ID ${clienteId} não encontrado.`);
      } else {
        toast.error("Erro ao excluir o cliente. Tente novamente.");
      }
      setMessage(""); 
    }
  };
  return (
    <div className="page_container">
      <div className="div_fots">
        <img
          className="img"
          src={img_cliente}
          style={{ width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Clientes</h1>
      </div>
      <Link to="/clientes">
        <svg
          className="svg_seta"
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="50"
          viewBox="0 0 82 43"
          fill="none"
        >
          <g filter="url(#filter0_d_60_451)">
            <rect x="19" y="13.1042" width="59" height="13" fill="#F5B91E" />
            <path
              d="M4.11706 18.7931L26.5154 2.62986L26.7178 34.6722L4.11706 18.7931Z"
              fill="#F5B91E"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_60_451"
              x="0.117188"
              y="2.62988"
              width="81.8828"
              height="40.0422"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_60_451"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_60_451"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </Link>
      <h2>Deseja excluir qual cliente?</h2>

      <div className="borda_excluir">
        <h4>ID do Cliente a excluir:</h4>
        <input
          type="text"
          placeholder="Insira o ID do cliente"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
        <button className="btn_delete" onClick={handleDelete}>
          Excluir
        </button>
        {message && <p className="success-message">{message}</p>}
        {error && <p className="error-message">{error}</p>}
      </div>
    </div>
  );
};

export default ExcluirCliente;
