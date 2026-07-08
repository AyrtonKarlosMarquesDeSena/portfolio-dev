import React from "react";
import styles from "./profile.module.css";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Profile(props) {
  return (
    <div className={styles.container}>
      <img src={props.avatar} alt={props.name} className={styles.avatar} />
      <h2 className={styles.name}>{props.name}</h2>
      <div className={styles.info}>{props.bio}</div>
      <div className={styles.info}>{props.phone}</div>
      <div className={styles.info}>{props.email}</div>

      <div className={styles.skills}>
        <h3>Habilidades Técnicas</h3>
        <div className={styles.skillIcons}>
          {props.skills.map((skill, index) => (
            <div key={index} className={styles.skillIcon}>
              {skill}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.links}>
        <a className={styles.link} href={props.githubUrl} target="_blank" rel="noreferer">
          <FaGithub className={styles.linkIcon} />
          Github
        </a>
        <a className={styles.link} href={props.linkedinUrl} target="_blank" rel="noreferer">
          <FaLinkedin className={styles.linkIcon} />
          Linkedin
        </a>
        <a className={styles.link} href={props.instagram} target="_blank" rel="noreferer">
          <FaInstagram className={styles.linkIcon} />
          Instagram
        </a>
      </div>
    </div>
  );
}

export default Profile;
