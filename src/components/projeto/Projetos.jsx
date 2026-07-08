import React from "react";
import Projeto from "../projeto/Projeto";
import styles from "./projetos.module.css";
import cronometro from "../../assets/Cronometro.png";
import jouseImage from "../../assets/jouseImage.jpeg";
import calculadora from "../../assets/calculadora-investimento.jpeg";
import listDrivers from "../../assets/list-drivers.png";
import imgProfileDev from "../../assets/profileDev.jpeg";
import { BsJavascript } from "react-icons/bs";
import { FaCss } from "react-icons/fa6";
import { SiExpressdotcom, SiInsomnia, SiVite } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNode, FaReact, FaHtml5 } from "react-icons/fa";

function Projetos() {
  const projetos = [
    {
      id: 1,
      imagem: cronometro,
      titulo: "StopWatch",
      descricao:
        "Um cronômetro digital interativo desenvolvido com HTML, CSS e JavaScript puro.",
      link: "https://github.com/AyrtonKarlosMarquesDeSena/STOPWATCH",
      skills: [<BsJavascript />, <FaCss />, <FaHtml5 />],
    },
    {
      id: 2,
      imagem: listDrivers,
      titulo: "API Fórmula 1",
      descricao:
        "API REST desenvolvida com Node.js e Express para gerenciamento de pilotos e classificação de equipes da Fórmula 1.",
      link: "https://github.com/AyrtonKarlosMarquesDeSena/formula1-drivers-api",
      skills: [
        <BsJavascript />,
        <FaNode />,
        <SiInsomnia />,
        <SiExpressdotcom />,
      ],
    },
    {
      id: 3,
      imagem: imgProfileDev,
      titulo: "Ayrton Sena | Portfólio",
      descricao:
        "Portfólio de Ayrton Sena, desenvolvedor FullStack com experiência em React, Node.js e JavaScript.",
      link: "https://github.com/AyrtonKarlosMarquesDeSena/portfolio-dev",
      skills: [
        <BsJavascript />,
        <FaReact />,
        <FaCss />,
        <FaHtml5 />,
        <SiVite />,
      ],
    },
    {
      id: 4,
      imagem: calculadora,
      titulo: "Calculadora de Investimento",
      descricao:
        "Aplicação web interativa para simular investimentos com aportes mensais, calculando rendimentos, impostos e projeções futuras. A ferramenta gera gráficos de evolução patrimonial (doughnut e barras) e tabelas detalhadas com dados mês a mês, utilizando JavaScript puro e Chart.js para visualização.",
      link: "https://github.com/AyrtonKarlosMarquesDeSena/CalculadoraDeInvestimento",
      skills: [<BsJavascript />, <FaCss />, <FaHtml5 />, <SiVite />],
    },
    {
      id: 5,
      imagem: jouseImage,
      titulo: "Jouse - Landing Page",
      descricao:
        "Recriação do site da Jouse, marca de carteiras minimalistas em couro nobre, desenvolvida com Tailwind CSS. O projeto reproduz a identidade visual da marca, com foco em design limpo, tipografia elegante e experiência de usuário refinada.",
      link: "https://github.com/AyrtonKarlosMarquesDeSena/Pagina-da-Jouse",
      skills: [<BsJavascript />, <FaCss />, <FaHtml5 />, <RiTailwindCssFill />],
    },
  ];

  return (
    <div className={styles.projetos}>
      <h2 className={styles.titulo}>Meus Projetos</h2>
      <div className={styles.grid}>
        {projetos.map((projeto) => (
          <Projeto
            key={projeto.id}
            imagem={projeto.imagem}
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            link={projeto.link}
            skills={projeto.skills}
          />
        ))}
      </div>
    </div>
  );
}

export default Projetos;
