import React from 'react';

const cardContext = React.createContext({
  cards: [],
  isViewOnly: false,
  onSaveNew: () => {},
});

export default cardContext;
