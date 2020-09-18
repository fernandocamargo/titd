import { useEffect, useState } from 'react';

import { getTimestamp } from './helpers';

export const useApp = () => {
  const [timestamp, setTimestamp] = useState('Loading...');

  useEffect(() => {
    const interval = window.setInterval(
      () => getTimestamp().then(setTimestamp),
      1000
    );

    return () => window.clearInterval(interval);
  }, []);

  return { timestamp };
};
