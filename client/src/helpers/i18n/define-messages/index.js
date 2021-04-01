import isFunction from 'lodash/isFunction';
import wrap from 'lodash/wrap';
import { defineMessage } from 'react-intl';

import { traverse } from 'helpers/object';

import { extract } from './helpers';

export default ({ namespace = '', messages }) =>
  traverse(messages).with(({ path, value }) => {
    const id = [namespace].concat(path).join('/');
    const dynamic = isFunction(value);
    const defaultMessage = dynamic ? extract(value) : value;
    const message = defineMessage({ defaultMessage, id });

    return wrap({ dynamic, message });
  });
