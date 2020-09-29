import isPlainObject from 'lodash/isPlainObject';

export default ({ source, iterate, replace }) =>
  !isPlainObject(source)
    ? replace(source)
    : Object.entries(source).reduce(
        (stack, [key, value]) =>
          Object.assign(stack, { [key]: iterate({ key, value }) }),
        {}
      );
