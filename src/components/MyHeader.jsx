import styles from "./MyHeader.module.css";

export default function MyHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.fraseContainer}>
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
    </header>
  );
}