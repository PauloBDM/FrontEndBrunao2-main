import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./ConsultarServico2.scss";
import img_servico from "../../../assets/images/img_servico.png";
import { ConsultarPorId } from "../../../services/APIService";

const ConsultarServico2 = () => {
  const { id } = useParams();
  const [servico, setServico] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchService = async () => {
      try {
        const data = await ConsultarPorId(id);
        console.log(data);
        if (data.length > 0) {
          setServico(data[0]);
        } else {
          setError("Serviço não encontrado.");
        }
      } catch (err) {
        alert("Erro ao buscar o serviço ID Invalido.");
        console.error(err);
      }
    };

    fetchService();
  }, [id]);

  return (
    <div className="page_container">
      <div className="div_fots">
        <img
          className="img"
          src={img_servico}
          style={{ width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Serviços</h1>
      </div>
      <Link to="/consultar-servico">
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
      <h1 className="title">Consulta de Serviço - ID: {id}</h1>

      {error && <p className="error-message">{error}</p>}
      {servico ? (
        <div className="borda_cadastrar">
          <label>Cliente ID:</label>
          <input type="text" value={servico.fk_id_cli} readOnly />

          <label>Endereço:</label>
          <input type="text" value={servico.ds_endereco} readOnly />

          <label>Valor:</label>
          <input type="number" value={servico.vlr_servico} readOnly />

          <label>Data Estimada:</label>
          <input
            type="date"
            value={servico.dt_estimada ? servico.dt_estimada.slice(0, 10) : ""} 
            readOnly
          />

          <label>Descrição:</label>
          <textarea value={servico.ds_servico} readOnly />
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ConsultarServico2;
