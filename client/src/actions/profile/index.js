import { CLEAR, SET } from './constants';

export const clear = () => ({ type: CLEAR });

export const set = ({ details }) => ({ type: SET, details });
