import compose from 'lodash/flow';

import * as statics from './statics';
import render from './render';
import withStyle from './style';

export const component = Object.assign(render, statics);

export const enhance = compose(withStyle);

export default enhance(component);
