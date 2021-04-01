import React from 'react';

import { useAuthentication, useI18n } from 'hooks';

import messages from './messages';

export default ({ className }) => {
  const { token } = useAuthentication();
  const { authentication, title } = useI18n(messages);

  return (
    <section className={className}>
      <h1>{title}</h1>
      <h2>{authentication.check({ token })}</h2>
    </section>
  );
};
