import React from 'react';

import Card from '../Card';

const CardList = (props) => {
  return props.planets.map((p) => {
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
};

export default CardList;
