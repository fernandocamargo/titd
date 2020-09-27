import flow from 'lodash/flow';
import isFunction from 'lodash/isFunction';
import isUndefined from 'lodash/isUndefined';
import { useCallback, useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import { prevent } from 'helpers/event';

export default ({ url, active, ...props }) => {
  const { pathname: location } = useLocation();
  const interactive = useMemo(() => isFunction(url), [url]);
  const highlightable = useMemo(() => !isUndefined(active) || interactive, [
    active,
    interactive,
  ]);
  const isActive = useCallback(() => (interactive ? false : active), [
    active,
    interactive,
  ]);
  const to = useMemo(() => (!url || interactive ? location : url), [
    interactive,
    location,
    url,
  ]);
  const onClick = useCallback(
    flow([prevent, interactive && url].filter(Boolean)),
    [interactive, url]
  );

  return {
    ...(highlightable && { isActive }),
    ...(interactive && { onClick }),
    ...props,
    to,
  };
};
