import { useState } from "react";
import styles from "./Cadastro.module.css";

export function Cadastro({ onRegister }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Usuário cadastrado:", { email, senha });
    if (onRegister) onRegister(); 
  };

  return (
    <div className={styles.cadastroContainer}>
      <div className={styles.cadastroBox}>
        <h2 className={styles.cadastroTitle}>Cadastro</h2>
        <form className={styles.cadastroForm} onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="senha">Senha:</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
