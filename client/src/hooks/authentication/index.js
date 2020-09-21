import { useCallback } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import * as authentication from 'actions/authentication';

import selector from './selectors';

export default () => {
  const dispatch = useDispatch();
  const { logged } = useSelector(selector);
  const login = useCallback(
    ({ credentials }) => dispatch(authentication.set({ credentials })),
    [dispatch]
  );
  const clear = useCallback(() => {
    dispatch(authentication.clear());
  }, [dispatch]);
  const logout = useCallback(() => batch(clear), [clear]);

  return { logged, login, logout };
};
