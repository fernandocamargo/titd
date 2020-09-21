import isString from 'lodash/isString';
import { createSelector } from 'reselect';

export const getAuthentication = ({ authentication }) => authentication || {};

export const isLogged = createSelector(
  getAuthentication,
  ({ access_token: token = '' }) => isString(token) && !!token.trim()
);

export default createSelector(isLogged, logged => ({ logged }));
