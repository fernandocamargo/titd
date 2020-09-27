import { useEffect } from 'react';

import { useAuthentication, useProfile } from 'hooks';

export default () => {
  const { logged } = useAuthentication();
  const { fetch } = useProfile();

  useEffect(() => {
    logged && fetch();
  }, [logged, fetch]);
};
