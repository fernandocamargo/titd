import { useMemo } from 'react';
import { useIntl } from 'react-intl';

import { traverse } from 'helpers/object';

export default messages => {
  const { formatMessage } = useIntl();
  const i18n = useMemo(
    () =>
      traverse(messages).with(({ value: getMessage }) => {
        const { dynamic, message } = getMessage();

        return dynamic
          ? params => formatMessage(message, params)
          : formatMessage(message);
      }),
    [formatMessage, messages]
  );

  return i18n;
};
