import React from 'react';

import Card from '../Card';
import AddCard from '../AddCard';

const CardList = (props) => {
  const planets = props.planets.map((p) => {
    return (
      <Card
        title={p.title}
        context={p.context}
        key={p.id}
        id={p.id}
        isViewOnly={props.viewOnly}
        onSave={props.onSave(p.id)}
        onChecked={props.pickCard(p.id)}
      />
    );
  });

  return (
    <div>
      {planets}
      <AddCard
        onSave={props.onSaveNew}
      />
    </div>
  );
};

export default CardList;
