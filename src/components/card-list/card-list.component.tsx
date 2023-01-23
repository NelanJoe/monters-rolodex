import { Monster } from "../../App";

import Card from "../card/card.component";
import "./card-list.style.css";

type CardListProps = {
  monsters: Monster[];
};

const cardList = (props: CardListProps) => {
  const { monsters } = props;

  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default cardList;
