import isEmpty from 'lodash/isEmpty';
import { parse } from 'querystring';
import { useMemo, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';

import { useAuthentication } from 'hooks';

export default () => {
  const { search } = useLocation();
  const { login } = useAuthentication();
  const credentials = useMemo(() => parse(search.substring(1)), [search]);
  const check = useCallback(
    () => !isEmpty(credentials) && login({ credentials }),
    [credentials, login]
  );
  const authorize = useMemo(() => 'http://localhost:1337/github/ping', []);

  useEffect(() => {
    check();
  }, [check]);

  return { authorize };
};
