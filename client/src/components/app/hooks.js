import { useCallback } from 'react';

import { useAuthentication } from 'hooks';

export default () => {
  const authentication = useAuthentication();
  const logout = useCallback(
    event => {
      event.preventDefault();

      return authentication.logout();
    },
    [authentication]
  );

  return { logout };
};
