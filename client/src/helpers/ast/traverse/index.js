import generate from '@babel/generator';
import isEqual from 'lodash/isEqual';

export const traverse = ({ body, properties, type, value }, path = []) => ({
  with: transform => {
    switch (true) {
      case isEqual(type, 'ArrowFunctionExpression'):
        return transform({ value: eval(generate(body).code), path });
      case isEqual(type, 'ObjectExpression'):
        return properties.forEach(({ key, value }) =>
          traverse(value, path.concat(key.name || key.value)).with(transform)
        );
      default:
        return transform({ value, path });
    }
  },
});

export default traverse;
