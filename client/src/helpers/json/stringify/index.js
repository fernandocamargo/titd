export default (...params) => {
  try {
    return JSON.stringify(...params);
  } catch {
    return '{}';
  }
};
