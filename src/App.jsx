import { useState } from "react"; 
import "./styles/theme.css";
import "./styles/global.css";
import { Gerenciador } from "./components/Gerenciador";
import { Cadastro } from "./components/Cadastro";
import { Login } from "./components/Login";

export default function App() {
  const [usuario, setUsuario] = useState(null);
  const [mostrarCadastro, setMostrarCadastro] = useState(false);

  if (!usuario) {
    return mostrarCadastro ? (
      <Cadastro
        onRegister={() => setMostrarCadastro(false)} 
      />
    ) : (
      <Login
        onLogin={(email) => setUsuario(email)}
        onShowCadastro={() => setMostrarCadastro(true)} 
      />
    );
  }

  return <Gerenciador />;
}
