import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-hot-toast";
import "./AlterarServico2.scss";
import img_servico from "../../../assets/images/img_servico.png";

const AlterarServico2 = () => {
  const { servicoId } = useParams();
  const [endereco, setEndereco] = useState("");
  const [valor, setValor] = useState("");
  const [dataLimite, setDataLimite] = useState("");
  const [descricao, setDescricao] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //const API_URL = "http://localhost:3010"; 
   const API_URL = "http://20.83.237.168:3010";
  
  
  const fetchServico = async () => {
    try {
  
      const response = await axios.get(`${API_URL}/consultar-servico/${servicoId}`);
      const { ds_endereco, vlr_servico, dt_estimada, ds_servico } = response.data;

      setEndereco(ds_endereco);
      setValor(vlr_servico);
      setDataLimite(dt_estimada);
      setDescricao(ds_servico);
    } catch (error) {
      toast.error("Erro ao carregar os dados do serviço.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServico();  
  }, [servicoId]);

  const handleEnderecoChange = (e) => setEndereco(e.target.value);
  const handleValorChange = (e) => setValor(e.target.value);
  const handleDataChange = (e) => setDataLimite(e.target.value);
  const handleDescricaoChange = (e) => setDescricao(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!endereco || !valor || !dataLimite || !descricao) {
      toast.error("Todos os campos são obrigatórios.");
      return;
    }

    try {
     
      await axios.put(`${API_URL}/alterar-servico/${servicoId}`, {
        ds_endereco: endereco,
        vlr_servico: valor,
        dt_estimada: dataLimite,
        ds_servico: descricao,
      });
      toast.success("Serviço atualizado com sucesso!");
      navigate("/servicos"); 
    } catch (error) {
      console.error("Erro ao atualizar o serviço:", error);
      toast.error("Erro ao atualizar o serviço. Verifique os dados e tente novamente.");
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

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
      <h1 className="title">Alterar Serviço - ID: {servicoId}</h1>

      <div className="borda_alterar2">
        <form onSubmit={handleSubmit}>
          <label>Endereço </label>
          <input
            type="text"
            value={endereco}
            onChange={handleEnderecoChange}
            placeholder="Digite o endereço"
          />

          <label>Valor</label>
          <input
            type="number"
            value={valor}
            onChange={handleValorChange}
            placeholder="Digite o valor"
          />

          <label>Data Limite</label>
          <input type="date" value={dataLimite} onChange={handleDataChange} />

          <label>Descrição</label>
          <textarea
            value={descricao}
            onChange={handleDescricaoChange}
            placeholder="Digite a descrição"
          />

          <button type="submit" className="btn_alterar">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlterarServico2;
