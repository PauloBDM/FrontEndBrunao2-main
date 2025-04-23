import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ConsultarCliente2.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { ConsultarClientePorId } from "../../../services/APIService";

const ConsultarCliente2 = () => {
  const { id } = useParams();
  const [cliente, setCliente] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const data = await ConsultarClientePorId(id);
        console.log(data);
        if (data.length > 0) {
          setCliente(data[0]);
        } else {
          setError("Serviço não encontrado.");
        }
      } catch (err) {
  
        console.error(err);
      }
    };

    fetchCliente();
  }, [id]);

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
      <Link to="/consultar-cliente">
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

      <h1 className="title">Consulta de Cliente - ID: {id}</h1>

      {error && <p className="error-message">{error}</p>}
      {cliente ? (
        <div className="borda_cadastrar">
          <label>Nome:</label>
          <input type="text" value={cliente.ds_nome} readOnly />

          <label>Número:</label>
          <input type="text" value={cliente.ds_num_cli} readOnly />

          <label>Email:</label>
          <input type="email" value={cliente.ds_email_cli} readOnly />

          <label>Comentário:</label>
          <textarea value={cliente.ds_comentario} readOnly />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ConsultarCliente2;
