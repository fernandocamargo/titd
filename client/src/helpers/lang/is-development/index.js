import isEqual from 'lodash/isEqual';
import lowerCase from 'lodash/lowerCase';

export default () => isEqual(lowerCase(process.env.NODE_ENV), 'development');
