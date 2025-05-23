import "./styles/theme.css";
import "./styles/global.css";

import { MyText } from "./components/MyText";

export default function App() {

  const texts = [
    {
      title: "Meu Título",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Meu Título",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      title: "Meu Título",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }
  ];
  return (
    <>
        {texts.map((text, index) => (
          <MyText key={index} title={`${index + 1}. ${text.title}`}>
            {text.text}
          </MyText>
        ))}
    </>
  );
}
