import { Monster } from "../../types/monster.type";

import "./card.style.css";

type CardProps = {
  monster: Monster;
};

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster-${name}`}
      />
      <h2>{name}</h2>
      <a href={`mailto:${email}`}>{email}</a>
    </div>
  );
};

export default Card;
