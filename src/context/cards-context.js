import React from 'react';

const cardContext = React.createContext({
  state: {},
  toggleView: () => {},
  onSave: () => {},
  onDelete: () => {},
  addNew: () => {},
  onPick: () => {},
});

export default cardContext;