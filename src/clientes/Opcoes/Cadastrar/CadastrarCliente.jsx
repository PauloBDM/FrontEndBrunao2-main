import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast"; 
import "./CadastrarCliente.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { cadastrarCliente } from "../../../services/APIService";

const CadastrarCliente = () => {
  const [cliente, setCliente] = useState({
    ds_nome: "",
    ds_num_cli: "",
    ds_email_cli: "",
    ds_comentario: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
  
    if (name === "ds_num_cli") {
     
      const rawValue = value.replace(/\D/g, "");
      
      const formattedValue = rawValue
        .replace(/^(\d{2})(\d)/, "($1)$2") 
        .replace(/(\d{5})(\d)/, "$1-$2") 
        .slice(0, 14); 
  
      setCliente({ ...cliente, [name]: formattedValue });
    } else {
      setCliente({ ...cliente, [name]: value });
    }
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();

    if (!cliente.ds_nome || !cliente.ds_num_cli || !cliente.ds_email_cli || !cliente.ds_comentario) {
      toast.error("Todos os campos são obrigatórios!"); 
      return;
    }

    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!telefoneRegex.test(cliente.ds_num_cli)) {
      toast.error("O número do cliente deve estar no formato (11)93424-2344."); 
      return;
    }

    if (!/\S+@\S+\.\S+/.test(cliente.ds_email_cli)) {
      toast.error("O e-mail fornecido não é válido."); 
      return;
    }

    try {
      const response = await cadastrarCliente(cliente);
      toast.success("Cliente cadastrado com sucesso!"); 
      setCliente({
        ds_nome: "",
        ds_num_cli: "",
        ds_email_cli: "",
        ds_comentario: "",
      });
    } catch (error) {
      toast.error("Erro ao cadastrar o Cliente."); 
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
      <h1>Cadastrar Cliente</h1>
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

      <div className="borda_cadastrar">
        <label>Nome</label>
        <input
          placeholder="Nome"
          type="text"
          name="ds_nome"
          value={cliente.ds_nome}
          onChange={handleChange}
          required
        />

        <label>Número</label>
        <input
          placeholder="(11) 0000-0000"
          type="text"
          name="ds_num_cli"
          value={cliente.ds_num_cli}
          onChange={handleChange}
          required
        />

        <label>Email</label>
        <input
          placeholder="exemplo@exemplo.com"
          type="email"
          name="ds_email_cli"
          value={cliente.ds_email_cli}
          onChange={handleChange}
          required
        />

        <label>Comentário</label>
        <textarea
          placeholder="Digite um comentário"
          name="ds_comentario"
          value={cliente.ds_comentario}
          onChange={handleChange}
          required
        />

        <button className="btn_cadastrar" onClick={handleCadastrar}>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default CadastrarCliente;
