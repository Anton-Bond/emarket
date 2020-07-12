import React, { useState } from 'react';

import Card from '../Card';

const CardList = (props) => {

  // store indexes of picked cards
  const [checkedCardIndexes, setcheckedCards] = useState([]);

  // add index of picked card or delete from array
  const pickCardHandler = (index) => (isChecked) => {
    let newCheckedCards = checkedCardIndexes;
    // add card index if it picked
    if (isChecked) {
      newCheckedCards.push(index);
    } else {
      // delete from array if card has been unpicked
      const idx = checkedCardIndexes.findIndex(item => item === index);
      newCheckedCards.splice(idx, 1);
    }
    setcheckedCards(newCheckedCards);
  };

  return props.planets.map((p, index) => {
    // don't render card if it was picked after click delete button on main page
    if (checkedCardIndexes.includes(index)) {
      return null
    }
    return (
      <Card
        title={p.title}
        context={p.context}
        key={index}
        isViewOnly={props.viewOnly}
        onSave={props.onSave(index)}
        onChecked={pickCardHandler(index)}
      />
    );
  });
}

export default CardList;