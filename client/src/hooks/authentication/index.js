import { useCallback } from 'react';
import { batch, useDispatch, useSelector } from 'react-redux';

import * as authentication from 'actions/authentication';
import * as profile from 'actions/profile';

import selector from './selectors';

export default () => {
  const dispatch = useDispatch();
  const { token, logged } = useSelector(selector);
  const login = useCallback(
    ({ credentials }) => dispatch(authentication.set({ credentials })),
    [dispatch]
  );
  const identify = useCallback(
    ({ details }) => dispatch(profile.set({ details })),
    [dispatch]
  );
  const clear = useCallback(
    () => [dispatch(authentication.clear()), dispatch(profile.clear())],
    [dispatch]
  );
  const logout = useCallback(() => batch(clear), [clear]);

  return { token, logged, login, identify, logout };
};
