import React, { useEffect, useState } from 'react';

export const toJSON = response => response.json();

export default () => {
  const [timestamp, setTimestamp] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(
      () =>
        window
          .fetch('/timestamp')
          .then(toJSON)
          .then(({ value }) => setTimestamp(value)),
      2500
    );

    return () => window.clearInterval(interval);
  }, []);

  return <h1>Timestamp: {timestamp}</h1>;
};
