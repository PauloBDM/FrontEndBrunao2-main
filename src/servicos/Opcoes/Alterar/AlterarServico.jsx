import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import img_servico from "../../../assets/images/img_servico.png";
import "./AlterarServico.scss";
import { AlterarPorId } from "../../../services/APIService";
import { toast } from "react-hot-toast";

const AlterarServico = () => {
  const [servicoId, setServicoId] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleAlterarClick = async () => {
    if (servicoId.trim() === "") {
      toast.error("Por favor, insira o ID do serviço.");
      return;
    }

    try {
      const service = await AlterarPorId(servicoId);
      if (service) {
        toast.success("Serviço encontrado. Redirecionando...");
        navigate(`/alterar-servico2/${servicoId}`);
      } else {
        toast.error("Serviço não encontrado.");
      }
    } catch (err) {
      if (err.message === "ID do serviço não encontrado.") {
        toast.error("Serviço não encontrado.");
      } else {
        toast.error("Erro ao buscar o serviço.");
      }
    }
  };
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
      <h1>Alterar Serviço</h1>
      <Link to="/servicos">
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
      <div className="borda_alterar1">
        <h4>Deseja alterar por qual ID</h4>
        <input
          type="text"
          placeholder="ID do serviço a alterar"
          value={servicoId}
          onChange={(e) => setServicoId(e.target.value)}
        />
        <button className="btn_alterar1" onClick={handleAlterarClick}>
          Alterar
        </button>
        {error && <div className="error-message">{error}</div>}
      </div>
    </div>
  );
};

export default AlterarServico;
