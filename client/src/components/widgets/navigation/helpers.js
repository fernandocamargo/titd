import update from 'immutability-helper';

export const getUrl = ({ item: { fragment, url }, parent }) =>
  !!fragment ? parent.url + fragment : url;

export const format = ({ items: collection = [], parent = { url: '' } }) =>
  collection.map(current => {
    const url = getUrl({ item: current, parent });
    const next = update(current, {
      url: { $set: url },
      items: {
        $apply: items => format({ parent: { ...current, url }, items }),
      },
    });

    return next;
  });
