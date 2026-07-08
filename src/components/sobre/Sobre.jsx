import React from "react";
import styles from "./sobre.module.css";
import { FaGraduationCap, FaCode, FaHeart, FaRocket } from "react-icons/fa";

function Sobre() {
  return (
    <div className={styles.sobre}>
      <div className={styles.container}>
        <h2 className={styles.titulo}>Ayrton Sena</h2>

        <div className={styles.secao}>
          <h3 className={styles.subtitulo}>
            <FaRocket className={styles.icone} /> Minha Jornada
          </h3>
          <p className={styles.paragrafo}>
            Sou formado em <b>Análise e Desenvolvimento de Sistemas</b> pela
            UNAMA, com uma paixão genuína por transformar ideias em código
            funcional. Minha jornada na tecnologia começou com a curiosidade de
            entender como as coisas funcionam por trás das telas, e desde então
            venho me dedicando a aprender e evoluir constantemente.
          </p>
          <p className={styles.paragrafo}>
            Acredito que a tecnologia tem o poder de resolver problemas reais e
            impactar vidas, e é com esse propósito que busco me desenvolver como
            profissional. Meu foco está em construir soluções eficientes,
            escaláveis e bem estruturadas.
          </p>
        </div>

        <div className={styles.secao}>
          <h3 className={styles.subtitulo}>
            <FaGraduationCap className={styles.icone} /> Formação Acadêmica
          </h3>
          <ul className={styles.lista}>
            <li>
              <strong>
                Tecnólogo em Análise e Desenvolvimento de Sistemas
              </strong>
              <br />
              <span className={styles.detalhe}>UNAMA · 2023 - 2025</span>
            </li>
            <li>
              <strong>Certificação HTML & CSS</strong>
              <br />
              <span className={styles.detalhe}>Hashtag Treinamentos</span>
            </li>
            <li>
              <strong>Jornada Full Stack (Back-End)</strong>
              <br />
              <span className={styles.detalhe}>JavaScript e Node.js</span>
            </li>
          </ul>
        </div>

        <div className={styles.secao}>
          <h3 className={styles.subtitulo}>
            <FaCode className={styles.icone} /> Habilidades Técnicas
          </h3>
          <div className={styles.skillsGrid}>
            <span className={styles.skill}>JavaScript (ES6+)</span>
            <span className={styles.skill}>Node.js</span>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>Express.js</span>
            <span className={styles.skill}>PostgreSQL</span>
            <span className={styles.skill}>REST APIs</span>
            <span className={styles.skill}>HTML5</span>
            <span className={styles.skill}>CSS3</span>
            <span className={styles.skill}>Git / GitHub</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sobre;
