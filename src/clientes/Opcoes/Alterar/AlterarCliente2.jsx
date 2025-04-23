import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./AlterarCliente2.scss";
import img_cliente from "../../../assets/images/img_cliente.png";
import { toast } from "react-hot-toast"; 

const AlterarCliente2 = () => {
  const { clienteId } = useParams();
  const [nome, setNome] = useState("");
  const [numero, setNumero] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  //const API_URL = "http://localhost:3010";
   const API_URL = "http://20.83.237.168:3010"; 


   
  const fetchCliente = async () => {
    try {
      const response = await axios.get(`${API_URL}/alterar-cliente/${clienteId}`);
      const { ds_nome, ds_num_cli, ds_email_cli, ds_comentario } = response.data;
      
      setNome(ds_nome);
      setNumero(ds_num_cli);
      setEmail(ds_email_cli);
      setComentario(ds_comentario);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCliente();
  }, [clienteId]);


  const handleNomeChange = (e) => setNome(e.target.value);
  const handleNumeroChange = (e) => {
    const rawValue = e.target.value.replace(/\D/g, "");
    const formattedValue = rawValue
      .replace(/^(\d{2})(\d)/, "($1)$2")
      .replace(/(\d{5})(\d)/, "$1-$2")
      .slice(0, 14);
    setNumero(formattedValue);
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleComentarioChange = (e) => setComentario(e.target.value);
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nome || !numero || !email || !comentario) {
      toast.error("Por favor, preencha todos os campos.");
      return;
    }

    const telefoneRegex = /^\(\d{2}\)\d{5}-\d{4}$/;
    if (!telefoneRegex.test(numero)) {
      toast.error("O número do cliente deve estar no formato (11)93424-2344.");
      return;
    }

    try {
      await axios.put(`${API_URL}/alterar-cliente/${clienteId}`, {
        ds_nome: nome,
        ds_num_cli: numero,
        ds_email_cli: email,
        ds_comentario: comentario,
      });
      toast.success("Cliente atualizado com sucesso!");
      navigate("/clientes");
    } catch (error) {
      console.error("Erro ao atualizar o cliente:", error);
      toast.error("Erro ao atualizar o cliente. Tente novamente.");
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
          src={img_cliente}
          style={{ width: 276, height: 211, flexShrink: 0 }}
          alt=""
        />
        <h1>Clientes</h1>
      </div>

      <h1 className="title">Alterar Cliente - ID: {clienteId}</h1>

      <div className="borda_alterar2">
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome: </label>
          <input
            type="text"
            id="nome"
            value={nome}
            onChange={handleNomeChange}
            placeholder="Digite o nome Novo"
          />

          <label>Número</label>
          <input
            type="text"
            value={numero}
            onChange={handleNumeroChange}
            placeholder="Digite o número Novo"
          />

          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Digite o email Novo"
          />

          <label>Comentário</label>
          <textarea
            value={comentario}
            onChange={handleComentarioChange}
            placeholder="Digite o comentário Novo"
          />

          <button type="submit" className="btn_alterar">
            Alterar
          </button>
        </form>
      </div>
    </div>
  );
};

export default AlterarCliente2;
