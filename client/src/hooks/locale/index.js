import { useSelector } from 'react-redux';

import selector from './selectors';

export default () => {
  const locale = useSelector(selector);

  return locale;
};
