import { resolve } from 'path';
import { config } from 'dotenv';
import { stringify } from 'querystring';
import { post } from 'axios';
import express from 'express';

export const {
  parsed: { PORT, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET },
} = config();

export const {
  parsed: { PORT: CLIENT_PORT },
} = config({ path: resolve('../client/.env') });

export const check = (_, response) => response.json({ all: 'good' });

export const receive = ({ query: { code } }, response) =>
  post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    },
    { headers: { accept: 'application/json' } }
  ).then(({ data }) =>
    response.redirect(
      `http://localhost:${CLIENT_PORT}/login?${stringify(data)}`
    )
  );

export const request = (_, response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?${stringify({
      client_id: GITHUB_CLIENT_ID,
      scope: ['repo'],
    })}`
  );

export default express()
  .get('/check', check)
  .get('/github/receive', receive)
  .get('/github/request', request)
  .listen(PORT);
