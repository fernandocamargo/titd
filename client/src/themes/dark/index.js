import cloneDeep from 'lodash/cloneDeep';
import merge from 'lodash/merge';

import theme from '../default';

export default merge(cloneDeep(theme), {
  background: '#282c34',
  color: '#fff',
});
