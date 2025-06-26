import styles from "./MyHeader.module.css";

export function MyHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.fraseContainer}>
        <h1 className={styles.frase}>
          <span className={styles.emoji}>🎲</span> Lucky Number Generator
        </h1>
      </div>
    </header>
  );
}