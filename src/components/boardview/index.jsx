import React, { useEffect, useState } from "react";
import { ReactSortable } from "react-sortablejs";

import { CardComponent } from "../../common/card";
import "./boardview.css";

export function BoardViewComponent(props) {
  const { listData } = props;
  const [cardDataMap, setCardDataMap] = useState(null);

  useEffect(function setCardDataEffect() {
    if (!listData?.length) return;
    const dataMap = {};
    listData.forEach((data) => {
      if (dataMap[data.category]) {
        const cardList = [...dataMap[data.category]];
        dataMap[data.category] = [...cardList, data];
      } else {
        dataMap[data.category] = [data];
      }
    });
    setCardDataMap(dataMap);
    console.log();
  }, []);

  function onChangeCards(cardDataList, key) {
    const cardDataClone = { ...cardDataMap };
    cardDataClone[key] = cardDataList;
    setCardDataMap(cardDataClone);
    console.log(cardDataClone, key);
  }
  const handleMoving = (event) => {
    return true;
  };

  return (
    <>
      {cardDataMap && (
        <div className="boardContainer">
          {Object.entries(cardDataMap).map((cardData, key) => {
            return (
              <div id={key} key={key} className="columnContainer">
                <span>{cardData[0]}</span>
                <ReactSortable
                  className="sortable"
                  list={cardData[1]}
                  setList={(item) => onChangeCards(item, cardData[0])}
                  group="board-sort"
                  onMove={handleMoving}
                >
                  {cardData[1].map((item, index) => (
                    <CardComponent cardItem={item} />
                  ))}
                </ReactSortable>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
