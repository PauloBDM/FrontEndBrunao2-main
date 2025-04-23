import React, { useState } from 'react';
import './CadastrarServico.scss';
import img_servico from '../../../assets/images/img_servico.png';
import { cadastrarServico } from '../../../services/APIService';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const CadastrarServico = () => {
  const [mensagemSucesso, setMensagemSucesso] = useState('');
  const [servico, setServico] = useState({
    fk_id_cli: '',
    ds_endereco: '',
    vlr_servico: '',
    dt_estimada: '',
    ds_servico: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setServico({
      ...servico,
      [name]: value
    });
  };

  const handleCadastrar = async (e) => {
    e.preventDefault();

    if (!servico.fk_id_cli || !servico.ds_endereco || !servico.vlr_servico || !servico.dt_estimada || !servico.ds_servico) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    try {
      await cadastrarServico(servico);
      toast.success("Serviço cadastrado com sucesso!");

      setTimeout(() => setMensagemSucesso(''), 3000);
      setServico({
        fk_id_cli: '',
        ds_endereco: '',
        vlr_servico: '',
        dt_estimada: '',
        ds_servico: ''
      });
    } catch (error) {
      if (error.response && error.response.status === 404) {
        toast.error("Erro: Cliente não encontrado. Digite um ID de cliente existente.");
      } else {
        toast.error("Erro ao cadastrar o serviço.");
      }
    }
  };
  return (
    <div className="page_container">
    <div className="div_fots">
      <img className='img' src={img_servico} style={{ width: 276, height: 211, flexShrink: 0 }}alt="" />
      <h1>Serviços</h1>
      </div>
      <h1>Cadastrar Serviço</h1>
      <Link to="/servicos">
      <svg className= "svg_seta" xmlns="http://www.w3.org/2000/svg" width="200" height="50" viewBox="0 0 82 43" fill="none">
  <g filter="url(#filter0_d_60_451)">
    <rect x="19" y="13.1042" width="59" height="13" fill="#F5B91E"/>
    <path d="M4.11706 18.7931L26.5154 2.62986L26.7178 34.6722L4.11706 18.7931Z" fill="#F5B91E"/>
  </g>
  <defs>
    <filter id="filter0_d_60_451" x="0.117188" y="2.62988" width="81.8828" height="40.0422" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix"/>
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
      <feOffset dy="4"/>
      <feGaussianBlur stdDeviation="2"/>
      <feComposite in2="hardAlpha" operator="out"/>
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_60_451"/>
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_60_451" result="shape"/>
    </filter>
  </defs>
</svg>
</Link>
      {mensagemSucesso && <p className="mensagem-sucesso">{mensagemSucesso}</p>}


      <div className="borda_cadastrar">
        <label>Cliente ID :</label>
        <input  
        placeholder='ID'
        type="text"
              name="fk_id_cli"
              value={servico.fk_id_cli}
              onChange={handleChange}
              required />
    
        <label>Endereço</label>
        <input placeholder='Endereço'
        type="text"
              name="ds_endereco"
              value={servico.ds_endereco}
              onChange={handleChange}
              required />
      
        <label>Valor</label>
        <input  placeholder='Valor'
        type="number"
              name="vlr_servico"
              value={servico.vlr_servico}
              onChange={handleChange}
              required />
   
        <label>Data Limite</label>
        <input placeholder='Data Estimada'
        type="date"
              name="dt_estimada"
              value={servico.dt_estimada}
              onChange={handleChange}
              required/>
      
     
        <label>Descrição</label>
        <textarea placeholder="Digite a descrição"  
              name="ds_servico"
              value={servico.ds_servico}
              onChange={handleChange}
              required/>
      <button className="btn_cadastrar" onClick={handleCadastrar}>
        Cadastrar
      </button>
      </div>
    </div>
  );
};

export default CadastrarServico;
