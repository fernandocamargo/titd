import isString from 'lodash/isString';
import { createSelector } from 'reselect';

export const getAuthentication = ({ authentication }) => authentication || {};

export const getToken = createSelector(
  getAuthentication,
  ({ access_token: token }) => token || ''
);

export const isLogged = createSelector(
  getToken,
  token => isString(token) && !!token.trim()
);

export default createSelector(getToken, isLogged, (token, logged) => ({
  token,
  logged,
}));
