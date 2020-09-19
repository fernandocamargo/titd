import React from 'react';

import use from './hooks';

export default ({ className }) => {
  const { timestamp } = use();

  return <h1 className={className}>Timestamp: {timestamp}</h1>;
};
