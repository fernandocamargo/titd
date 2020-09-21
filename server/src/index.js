import { config } from 'dotenv';
import { stringify } from 'querystring';
import { post } from 'axios';
import express from 'express';

export const {
  parsed: { PORT, GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET },
} = config();

export const ping = (_, response) =>
  response.redirect(
    `https://github.com/login/oauth/authorize?${stringify({
      client_id: GITHUB_CLIENT_ID,
      scope: ['repo'],
    })}`
  );

export const pong = ({ query: { code } }, response) =>
  post(
    'https://github.com/login/oauth/access_token',
    {
      client_id: GITHUB_CLIENT_ID,
      client_secret: GITHUB_CLIENT_SECRET,
      code,
    },
    { headers: { accept: 'application/json' } }
  ).then(({ data }) =>
    response.redirect(`http://localhost:3000/login?${stringify(data)}`)
  );

export default express()
  .get('/github/ping', ping)
  .get('/github/pong', pong)
  .listen(PORT);
