import React from 'react';

import Card from '../Card';

const CardList = (props) => {
  return props.planets.map((p, index) => {
    return (
      <Card
        title={p.title}
        context={p.context}
        key={index}
        isViewOnly={props.viewOnly}
        onSave={props.onSave(index)}
        onChecked={props.pickCard(index)}
      />
    );
  });
};

export default CardList;
