import { get as getLocale } from 'helpers/locale';

export const getInitialState = () => ({ locale: getLocale() });

export default (state = getInitialState(), { type }) => {
  switch (type) {
    default:
      return state;
  }
};
