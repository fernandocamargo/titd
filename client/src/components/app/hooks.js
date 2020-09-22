import { useCallback, useEffect } from 'react';

import { useAuthentication, useProfile } from 'hooks';

export default () => {
  const { logout: clear, logged } = useAuthentication();
  const { fetch } = useProfile();
  const logout = useCallback(
    event => {
      event.preventDefault();

      return clear();
    },
    [clear]
  );

  useEffect(() => {
    logged && fetch();
  }, [logged, fetch]);

  return { logout };
};
