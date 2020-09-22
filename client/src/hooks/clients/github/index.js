import { Octokit } from '@octokit/rest';
import { useMemo } from 'react';

import { useAuthentication } from 'hooks';

export default () => {
  const { token } = useAuthentication();
  const client = useMemo(() => new Octokit({ auth: token }), [token]);

  return client;
};
