import React from "react";

import "./card.css";

export function CardComponent({ cardItem }) {
  return (
    <div
      className="cardContainer"
      id={`simple-item-${cardItem.id}`}
      key={cardItem.id}
    >
      <div className="header">{cardItem.title}</div>
      <div className="header">
        <span>{cardItem.description}</span>
      </div>
      <div className="header">{cardItem.priority}</div>
    </div>
  );
}
