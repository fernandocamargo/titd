import express from 'express';

export const PORT = 1337;

export const welcome = () => console.log(`Welcome @ http://localhost:${PORT}`);

export const timestamp = (_, response) =>
  response.json({ value: new Date().getTime() });

export default express()
  .get('/timestamp', timestamp)
  .listen(PORT, welcome);
