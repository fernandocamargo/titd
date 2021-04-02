export default (...params) => {
  try {
    return JSON.parse(...params);
  } catch {
    return {};
  }
};
