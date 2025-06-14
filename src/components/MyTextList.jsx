import styles from "./MyTextList.module.css";
import { MyText } from "./MyText";

export function MyTextList() {
  const texts = [
    {
      title: "My text 0",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos excepturi ea enim odit vel et quia doloremque, nam accusantium eum blanditiis debitis natus inventore laborum magnam ipsum tempore itaque?",
    },
    {
      title: "My text 1",
      text: "Quos, voluptatum debitis, distinctio aut eaque ipsum impedit qui assumenda quis tempore libero voluptates dolore, vel inventore iste? Tempore magnam ut vero!",
    },
    {
      title: "My text 2",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere sed veritatis officiis atque exercitationem vero sit necessitatibus deserunt, maxime ab expedita repellat impedit aut quae temporibus debitis voluptatem recusandae ratione.",
    },
    {
      title: "My text 3",
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos excepturi ea enim odit vel et quia doloremque, nam accusantium eum blanditiis debitis natus inventore laborum magnam ipsum tempore itaque?",
    },
    {
      title: "My text 4",
      text: "Quos, voluptatum debitis, distinctio aut eaque ipsum impedit qui assumenda quis tempore libero voluptates dolore, vel inventore iste? Tempore magnam ut vero!",
    },
    {
      title: "My text 5",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere sed veritatis officiis atque exercitationem vero sit necessitatibus deserunt, maxime ab expedita repellat impedit aut quae temporibus debitis voluptatem recusandae ratione.",
    },
    // {
    //   title: "Lorem ipsum dolor",
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos excepturi ea enim odit vel et quia doloremque, nam accusantium eum blanditiis debitis natus inventore laborum magnam ipsum tempore itaque?",
    // },
    // {
    //   title: "Lorem ipsum dolor",
    //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam quos excepturi ea enim odit vel et quia doloremque, nam accusantium eum blanditiis debitis natus inventore laborum magnam ipsum tempore itaque?",
    // },
  ];

  return (
    <div>
      <h1 className={styles.title}>Meus textos</h1>
      <div className={styles.container}>
        {texts.map((text, index) => (
          <MyText key={index} title={`${index + 1}. ${text.title}`}>
            {text.text}
          </MyText>
        ))}
      </div>
    
    </div>
  );
}