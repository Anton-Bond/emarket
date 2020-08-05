import React from 'react';

const cardContext = React.createContext({
  state: {},
  onSave: () => {},
  onDelete: () => {},
  addNew: () => {},
  onPick: () => {},
});

export default cardContext;
