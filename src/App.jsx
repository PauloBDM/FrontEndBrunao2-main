import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/images/logo_orea.png";
import cara_oreia from "./assets/images/cara_orea.png";
import muro from "./assets/images/muro.jpg";
import banheiro from "./assets/images/banheiro.jpg";
import telhado from "./assets/images/telhado.jpg";
import casa from "./assets/images/casa.jpg";
import cliente from "./assets/images/luvadepedreiro.jpg";
import "./css/fonts.css";
import "./css/styles.css";
import "./App.scss";

function App() {
  const [expandedFAQ, setExpandedFAQ] = useState(null); 

  const toggleFAQ = (index) => {
 
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  return (
    <div className="App">
      <div className="Header_site">
        <div className="cabecalho">
          <img
            src={logo}
            alt="Logo"
            style={{ width: 101, height: 94, flexShrink: 0 }}
          />
          <nav>
            <p>DesenrolaJá</p>
            <a href="#">Home</a>
            <a href="#sobre">Sobre</a>
            <a href="#servico">Serviços</a>
            <a href="#contato">Contato</a>
          </nav>
          <Link to="/login">
            <button>Sign In</button>
          </Link>
        </div>
      </div>
      <div className="topo">
      <section className="text_oreia">
        <p>Oferecendo o Melhor </p>
        <div className="servico">Serviço</div>
      </section>

      <div className="resumo_oreia">
        <p>
          Me chamo Orea Seca e trabalho de pedreiro desde os 15 anos, já tenho
          mais de 20 anos de experiência na área, tendo feito todo tipo de
          serviço.
        </p>
      </div>

      <div className="img_oreacara">
        <img
          src={cara_oreia}
          alt="Orea"
          style={{ width: 548, height: 591, flexShrink: 0 }}
        />
      </div>
      </div>
      <div className='exp_borda'>
      <h2>Experiência em:</h2>
        <p>Alvenaria | Escavação | Pisos | Reboco | Telhados

        </p> <p>Acabamentos Finos e muito mais </p>
      </div>
      <section className="melhores_servicos">
        <section id="servico">
          <h2>
            Melhores <span>Serviços</span>
          </h2>
          <div className="servicos_container">
            <div className="servico_item">
              <img src={muro} alt="Muro Simples" />
              <p>Muro Simples</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={banheiro} alt="Banheiro" />
              <p>Banheiro</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={telhado} alt="Telhado" />
              <p>Telhado</p>
              <p>★★★★★</p>
            </div>
            <div className="servico_item">
              <img src={casa} alt="Casa Completa" />
              <p>Casa Completa</p>
              <p>★★★★★</p>
            </div>
          </div>
          <button className="btn_saiba">Explore Tudo</button>
        </section>
      </section>
      <section id="sobre">
      <section className="como_trabalho">
  <h2>Como <span>Trabalho</span></h2>
  <div className="trabalho_items">
    <div className="trabalho_item">
      <h3>Agenda de Horários</h3>
      <p>Agendar horário a partir do site para orçamento, verificar disponibilidade de horários e dias</p>
      <button className="btn_saiba">Saiba Mais</button>
    </div>
    <div className="trabalho_item">
      <h3>Orçamentos</h3>
      <p>Serviços simples como colocar pisos, rebocar paredes, fazer aterramento entre outros possuem o preço tabelado por dia de serviço, coisas mais complexas necessitam de orçamento</p>
      <button className="btn_saiba">Saiba Mais</button>
    </div>
    <div className="trabalho_item">
      <h3>Planejamento</h3>
      <p>Para serviços mais complexos será necessário um período de até 1 semana entre o orçamento e o início das obras por conta do planejamento que será feito com acompanhamento do cliente</p>
      <button className="btn_saiba">Saiba Mais</button>
    </div>
  </div>
</section>
<section className="comentarios_clientes">
  <h2>Comentários de <span>Clientes</span></h2>
  <div className="comentario_item">
  <img src={cliente} alt="cliente" />
  <div className="comentario_texto">
  <p class="avaliacao_texto">"Esse caba é bão."</p>
  <p class="descricao_trabalho">Chamei ele lá em casa pra o bicho desenrolar um banheiro novo e ele resolveu tudo certo e ainda pedi tbm pra ele rebocar a parede do quarto de mainha e ele fez isso num dia só, RECEBA!! :D</p>
  <p class="avaliacao_estrelas">★★★★★</p>
  <p class="autor_avaliacao">- Sr. Reseba</p>
</div>

  </div>
</section>
</section>
    <section className="pricing">
        <div className="card">
          <h2>Reparos</h2>
          <p className="price">R$150/Dia</p>
          <ul>
            <li>Armador Padrão</li>
            <li>Pequenos Reajustes</li>
            <li>Trocar Azulejos</li>
            <li>Rebaixar Gesso em Serviços</li>
            <li>Alinhamento</li>
          </ul>
          <button>Quero esse!</button>
        </div>

        <div className="card highlight-card">
          <h2>Serviços Simples</h2>
          <p className="price">R$300/Dia</p>
          <ul>
            <li>Rebocar Paredes</li>
            <li>Alinhamento Fino</li>
            <li>Acabamento</li>
            <li>Levantar Muros</li>
            <li>Colocar Metais</li>
            <li>Mais...</li>
          </ul>
          <button>Quero esse!</button>
        </div>

        <div className="card">
          <h2>Personalizado</h2>
          <p className="price">R$: A Combinar</p>
          <ul>
            <li>Serviço mais complexo ou sob medida</li>
            <li>Discussão de preço com o cliente</li>
            <li>Orçamento feito conforme necessidades</li>
          </ul>
          <button>Quero esse!</button>
        </div>
      </section>

      <section className="faq">
        <h2>FAQs</h2>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(0)}>
            <span className="faq-icon">{expandedFAQ === 0 ? "-" : "+"}</span>
            Você realiza orçamentos gratuitos?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 0 ? "expanded" : ""}`}>
            {expandedFAQ === 0 && (
              <p>
                O Primeiro orçamento é gratuito, já os posteriores serão
                cobrados o valor simbólico de R$25,00
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(1)}>
            <span className="faq-icon">{expandedFAQ === 1 ? "-" : "+"}</span>
            Você fornece o material ou o cliente precisa comprar?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 1 ? "expanded" : ""}`}>
            {expandedFAQ === 1 && (
              <p>
                Em serviços simples, o cliente deve fornecer o material. Para
                serviços mais complexos, podemos fornecer o material mediante
                orçamento.
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(2)}>
            <span className="faq-icon">{expandedFAQ === 2 ? "-" : "+"}</span>
            Quais formas de pagamento você aceita?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 2 ? "expanded" : ""}`}>
            {expandedFAQ === 2 && (
              <p>
                Eu aceito pagamentos via transferência bancária, PIX, e
                dinheiro.
              </p>
            )}
          </div>
        </div>
        <div className="faq-item">
          <h3 onClick={() => toggleFAQ(3)}>
            <span className="faq-icon">{expandedFAQ === 3 ? "-" : "+"}</span>
            Você faz limpeza do local após a conclusão dos trabalhos?
          </h3>
          <div className={`faq-answer ${expandedFAQ === 3 ? "expanded" : ""}`}>
            {expandedFAQ === 3 && (
              <p>
                Sim, sempre faço uma limpeza básica no local após finalizar o
                serviço.
              </p>
            )}
          </div>
        </div>
      </section>

      <section id="contato">
        <footer>
          <h2>Se você gostou e deseja me contratar</h2>
          <button>Contato</button>
          <div className="footer-info">
            <p>DesenrolaJá</p>
            <p>© 2024 DryBer SMF. All Rights Reserved</p>
            <ul>
              <li>
                <a href="/insta">Instagram Profissional</a>
              </li>
              <li>
                <a href="/link">LinkedIn</a>
              </li>
              <li>
                <a href="/tik">TikTok</a>
              </li>
              <li>
                <a href="/ytb">Youtube</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/te">Termos e condições</a>
              </li>
              <li>
                <a href="/pp">Política de privacidade</a>
              </li>
              <li>
                <a href="/ctt">Contato</a>
              </li>
            </ul>
            <p>Contato: (851) 707070-707070</p>
            <p>Email: ORSL_SMF@gmail.com</p>
          </div>
        </footer>
      </section>
    </div>
  );
}

export default App;
