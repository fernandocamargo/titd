import { CLEAR, SET } from './constants';

export const getInitialState = () => ({});

export default (state = getInitialState(), { type, details }) => {
  switch (type) {
    case CLEAR:
      return getInitialState();
    case SET:
      return { ...state, ...details };
    default:
      return state;
  }
};
