import styles from "./MyGrid.module.css";

export function MyGrid() {
  return (
    <div className={styles.container}>
      <header className={styles.header1}/>
      
      <div className={styles.main}>
        <div className={styles.grid}>
          <div className={styles.card}>
            <img src="https://picsum.photos/200/300?random=1"></img>
            <h2>text0</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/200/300?random=2"></img>
            <h2>text1</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/200/300?random=3"></img>
            <h2>text2</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/200/300?random=4"></img>
            <h2>text3</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
          <div className={styles.card}>
            <img src="https://picsum.photos/200/300?random=5"></img>
            <h2>text4</h2>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          </div>
        </div>
      </div>
      <footer className={styles.footer} />
      <footer className={styles.footer2} />
    </div>
  );
}