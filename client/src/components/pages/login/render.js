import React from 'react';

import use from './hooks';

export default ({ className }) => {
  const { authorize } = use();

  return (
    <section className={className}>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
        faucibus id lorem sed condimentum.
      </p>
      <p>
        <span>Yes, I'm want to </span>
        <a href={authorize} title="Click to authorize">
          authorize the application to access your Github account
        </a>
        <span>.</span>
      </p>
    </section>
  );
};
