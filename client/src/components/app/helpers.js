import property from 'lodash/property';

import { toJSON } from 'helpers/response';

export const format = property('value');

export const getTimestamp = () =>
  window
    .fetch('/timestamp')
    .then(toJSON)
    .then(format);
