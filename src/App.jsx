import "./styles/global.css";
import "./styles/theme.css";
import { MyHeader } from "./components/MyHeader";
import { LuckyNumber } from "./components/LuckyNumber";

export default function App() {
  
  return (
     <>
      <MyHeader/>
      <LuckyNumber />
    </>
  );
}