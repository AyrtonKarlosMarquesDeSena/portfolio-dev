import React from "react";
import styles from "./home.module.css";
import { useNavigate } from "react-router-dom";
import {
  FaTelegramPlane,
  FaFolderOpen,
  FaReact,
  FaNode,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaCss } from "react-icons/fa6";

function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.home}>
      <div className={styles.container}>
        <p className={styles.disponivel}>
          <span className={styles.bolinha}></span>
          Disponível para oportunidades
        </p>

        <div className={styles.perfil}>
          <div className={styles.titulos}>
            <h2 className={styles.titulo}>
              Olá, eu sou <span className={styles.name}>Ayrton Sena</span>
            </h2>
            <h3 className={styles.subTitulo}>Desenvolvedor FullStack</h3>
            <p className={styles.tagline}>
              Transformando linhas de código em soluções reais.
            </p>
          </div>

          <p className={styles.paragrafo}>
            Sou formado em <b>Análise e Desenvolvimento de Sistemas</b> pela
            UNAMA, apaixonado por tecnologia e sempre em busca de novos
            desafios. Tenho experiência com desenvolvimento FullStack utilizando
            JavaScript, Node.js, React e bancos de dados relacionais.
          </p>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <span className={styles.numero}>5+</span>
              <span className={styles.label}>Projetos</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.numero}>2</span>
              <span className={styles.label}>Anos de estudo</span>
            </div>
            <div className={styles.stat}>
              <span className={styles.numero}>6</span>
              <span className={styles.label}>Tecnologias</span>
            </div>
          </div>

          <div className={styles.techDestaque}>
            <span>Principais tecnologias:</span>
            <div className={styles.techIcons}>
              <BsJavascript className={styles.techIcon} title="JavaScript" />
              <FaReact className={styles.techIcon} title="React" />
              <FaNode className={styles.techIcon} title="Node.js" />
              <FaCss className={styles.techIcon} title="CSS" />
              <FaHtml5 className={styles.techIcon} title="Html5" />
              <RiTailwindCssFill className={styles.techIcon} title="Tailwind" />
            </div>
          </div>

          <div className={styles.botoes}>
            <button onClick={() => navigate("/about")} className={styles.botao}>
              <FaTelegramPlane /> Sobre mim
            </button>
            <button
              onClick={() => navigate("/project")}
              className={styles.botaoSecundario}
            >
              <FaFolderOpen />
              Ver Projetos
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
