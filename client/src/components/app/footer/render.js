import React from 'react';

import { useI18n } from 'hooks';

import messages from './messages';

export default ({ className }) => {
  const { copyright } = useI18n(messages);

  return (
    <footer className={className}>
      <p>{copyright}</p>
    </footer>
  );
};
