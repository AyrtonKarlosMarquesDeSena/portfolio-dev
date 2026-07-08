import React from "react";
import styles from "./projeto.module.css";

function Projeto(props) {
  return (
    <div className={styles.project}>
      <div className={styles.container}>
        <img src={props.imagem || ""} alt={props.titulo || "Projeto"} />
        <h2>{props.titulo || "Título do Projeto"}</h2>
        <p>{props.descricao || "Descrição do projeto"}</p>
        <div className={styles.skills}>
          <h3>tecnologias utilizadas</h3>
          <div className={styles.skillIcons}>
            {props.skills.map((skill, index) => (
              <div key={index} className={styles.skillIcon}>
                {skill}
              </div>
            ))}
          </div>
        </div>
        <a
          href={props.link || "#"}
          className={styles.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver projeto
        </a>
      </div>
    </div>
  );
}

export default Projeto;
