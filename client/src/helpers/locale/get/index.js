import first from 'lodash/first';

export default () => {
  const { language, languages, userLanguage } = window.navigator;
  const locale = first(languages) || language || userLanguage;

  return locale;
};
