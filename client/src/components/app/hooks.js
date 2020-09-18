import { useEffect, useState } from 'react';

import { getTimestamp } from './helpers';

export const useApp = () => {
  const [timestamp, setTimestamp] = useState();

  useEffect(() => {
    const interval = window.setInterval(
      () => getTimestamp().then(setTimestamp),
      2500
    );

    return () => window.clearInterval(interval);
  }, []);

  return { timestamp };
};
