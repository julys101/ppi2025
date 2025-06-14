
import styles from "./MyFooter.module.css";
import { Github, Instagram, MessageCircleHeart } from "lucide-react";

export default function MyFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.left}>
        <p><strong>IFRN - Campus Macau </strong></p>
        <p>Curso Técnico em Informática</p>
        <p>Programação para Internet 2025</p>
      </div>

      <div className={styles.center}>
        <p className={styles.name}> Yasmim Julyane Martins </p>
      </div>

      <div className={styles.right}>
        <a href="https://github.com/julys101/ppi2025" target="_blank" rel="noopener noreferrer">
          <Github size={24} />
        </a>
        <a href="https://www.instagram.com/yasmim_julyane/?next=%2F" target="_blank" rel="noopener noreferrer">
          <Instagram size={24} />
        </a>
        <a href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox">
          <MessageCircleHeart size={24} />
        </a>
      </div>
    </footer>
  );
}
