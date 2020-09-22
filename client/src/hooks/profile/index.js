import { useCallback } from 'react';

import { useAsync, useAuthentication } from 'hooks';
import { useGet as useGetProfile } from 'hooks/services/profile';

export default () => {
  const { identify } = useAuthentication();
  const getProfile = useGetProfile();
  const set = useCallback(details => identify({ details }), [identify]);
  const promise = useCallback(() => getProfile().then(set), [getProfile, set]);
  const { resolve: fetch, data: details, ...fetching } = useAsync({ promise });

  return { details, fetch, ...fetching };
};
