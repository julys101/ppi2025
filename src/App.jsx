
import "./styles/global.css";
import "./styles/theme.css";

import MyHeader from "./components/MyHeader";
import MyMain from "./components/MyMain";
import MyFooter from "./components/MyFooter";

export default function App() {
  return (
    <div className="app">
      <MyHeader />
      <MyMain />
      <MyFooter />
    </div>
  );
}