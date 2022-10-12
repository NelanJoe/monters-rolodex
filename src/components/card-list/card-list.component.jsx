import Card from "../card/card.component";

import "./card-list.style.css";

const cardList = (props) => {
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
