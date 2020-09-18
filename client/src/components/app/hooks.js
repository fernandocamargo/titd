import { useEffect, useState } from 'react';

import { toJSON } from 'helpers/response';

import { format } from './helpers';

export const useApp = () => {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () =>
        window
          .fetch('/timestamp')
          .then(toJSON)
          .then(format)
          .then(setTimestamp),
      2500
    );

    return () => window.clearInterval(interval);
  }, []);

  return { timestamp };
};
