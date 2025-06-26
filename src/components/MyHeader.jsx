import styles from "./MyHeader.module.css";

export function MyHeader() {
  return (
    <header className={styles.container}>
      <div className={styles.fraseContainer}>
        <h1 className={styles.title}>Foco, Força, Fé</h1>
      </div>
    </header>
  );
}