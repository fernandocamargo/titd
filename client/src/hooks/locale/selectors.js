import identity from 'lodash/identity';
import property from 'lodash/property';
import { createSelector } from 'reselect';

export const getSettings = property('settings');

export const getLocale = createSelector(getSettings, property('locale'));

export default createSelector(getLocale, identity);
