import { useCallback } from 'react';

import { useGithub } from 'hooks/clients';

import { format } from './helpers';

export default () => {
  const { request } = useGithub();
  const service = useCallback(() => request('/user').then(format), [request]);

  return service;
};
