import noop from 'lodash/noop';

export class Validity {
  constructor() {
    this.chain = new Promise(noop);
    this.stale = false;
  }

  expire = () => {
    this.stale = true;
  };

  promise = (method, ...params) => {
    const { chain, stale } = this;
    const { [method]: apply } = Promise;

    return !stale ? apply.call(Promise, ...params) : chain;
  };

  succeed = (...params) => this.promise('resolve', ...params);

  fail = (...params) => this.promise('reject', ...params);

  check = promise => {
    const { succeed, fail } = this;

    return promise.then(succeed).catch(fail);
  };
}
