import { CLEAR, SET } from './constants';

export const getInitialState = () => ({});

export default (state = getInitialState(), { type, credentials }) => {
  switch (type) {
    case CLEAR:
      return getInitialState();
    case SET:
      return { ...state, ...credentials };
    default:
      return state;
  }
};
