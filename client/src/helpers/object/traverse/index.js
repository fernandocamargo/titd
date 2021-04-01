import isPlainObject from 'lodash/isPlainObject';
import update from 'immutability-helper';

export const traverse = (object, path = []) => ({
  with: transform => {
    const deep = isPlainObject(object);
    const dig = (stack, [key, current]) => {
      const next = traverse(current, path.concat(key)).with(transform);

      return update(stack, { [key]: { $set: next } });
    };

    return deep
      ? Object.entries(object).reduce(dig, object.constructor())
      : transform({ value: object, path });
  },
});

export default traverse;
