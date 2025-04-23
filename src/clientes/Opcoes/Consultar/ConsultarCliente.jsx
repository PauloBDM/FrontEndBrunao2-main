import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./ConsultarCliente.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { ConsultarClientePorId } from "../../../services/APIService";
import { toast } from "react-hot-toast";

const ConsultarCliente = () => {
  const [clienteId, setClienteId] = useState("");
  const [error] = useState("");
  const navigate = useNavigate();

  const handleConsultarClick = async () => {
    if (clienteId.trim() === "") {
      toast.error("Por favor, insira o ID do cliente.");
      return;
    }
    try {
      const response = await ConsultarClientePorId(clienteId);
      if (response) {
        toast.success(`Cliente com ID ${clienteId} encontrado!`);
        navigate(`/consultar-cliente2/${clienteId}`);
      } else {
        toast.error("Cliente não encontrado.");
      }
    } catch (err) {
      toast.error("Erro ao consultar o cliente.");
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
      <h1>Consultar Cliente</h1>
      {error && <p className="error-message">{error}</p>}
      <div className="borda_consultar">
        <h4>Deseja consultar por qual ID</h4>
        <input
          type="text"
          placeholder="ID do cliente a consultar"
          value={clienteId}
          onChange={(e) => setClienteId(e.target.value)}
        />
        <button className="btn_consultar" onClick={handleConsultarClick}>
          Consultar
        </button>
      </div>
    </div>
  );
};

export default ConsultarCliente;
