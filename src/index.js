import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import { Toaster } from "react-hot-toast";
import Login from "../src/login/Login.jsx";
import PreTabela from "../src/pré-tabela/PreTabela.jsx";
import ServicosInicial from "../src/servicos/ServicosInicial.jsx";
import CadastrarServico from "../src/servicos/Opcoes/Cadastrar/CadastrarServico.jsx";
import ExcluirServico from "../src/servicos/Opcoes/Excluir/ExcluirServico.jsx";
import ConsultarServico from "../src/servicos/Opcoes/Consultar/ConsultarServico.jsx";
import ConsultarServico2 from "../src/servicos/Opcoes/Consultar/ConsultarServico2.jsx";
import AlterarServico from "../src/servicos/Opcoes/Alterar/AlterarServico.jsx";
import AlterarServico2 from "../src/servicos/Opcoes/Alterar/AlterarServico2.jsx";
import ClientesInicial from "./clientes/ClientesInicial.jsx";
import ExcluirCliente from "./clientes/Opcoes/Excluir/ExcluirCliente.jsx";
import CadastrarCliente from "./clientes/Opcoes/Cadastrar/CadastrarCliente.jsx";
import AlterarCliente from "./clientes/Opcoes/Alterar/AlterarCliente.jsx";
import AlterarCliente2 from "./clientes/Opcoes/Alterar/AlterarCliente2.jsx";
import ConsultarCliente from "./clientes/Opcoes/Consultar/ConsultarCliente.jsx";
import ConsultarCliente2 from "./clientes/Opcoes/Consultar/ConsultarCliente2.jsx";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
 
  <React.StrictMode>
    <BrowserRouter>
    <Toaster />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/pre-tabela" element={<PreTabela />} />
        <Route path="/servicos" element={<ServicosInicial />} />
        <Route path="/cadastrar-servico" element={<CadastrarServico />} />
        <Route path="/excluir-servico" element={<ExcluirServico />} />
        <Route path="/consultar-servico" element={<ConsultarServico />} />
        <Route path="/consultar-servico2/:id" element={<ConsultarServico2 />} />
        <Route path="/alterar-servico" element={<AlterarServico />} />
        <Route
          path="/alterar-servico2/:servicoId"
          element={<AlterarServico2 />}
        />

        <Route path="/clientes" element={<ClientesInicial />} />
        <Route path="/excluir-cliente" element={<ExcluirCliente />} />
        <Route path="/cadastrar-cliente" element={<CadastrarCliente />} />
        <Route path="/alterar-cliente" element={<AlterarCliente />} />
        <Route
          path="/alterar-cliente2/:clienteId"
          element={<AlterarCliente2 />}
        />
        <Route path="/consultar-cliente" element={<ConsultarCliente />} />
        <Route path="/consultar-cliente2/:id" element={<ConsultarCliente2 />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
