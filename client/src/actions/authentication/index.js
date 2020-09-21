import { CLEAR, SET } from './constants';

export const clear = () => ({ type: CLEAR });

export const set = ({ credentials }) => ({ type: SET, credentials });
