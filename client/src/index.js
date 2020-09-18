import React, { StrictMode } from 'react';
import { render } from 'react-dom';

import { Root } from 'components';

export const initialize = () =>
  render(
    <StrictMode>
      <Root />
    </StrictMode>,
    document.getElementById('root')
  );

export default document.fonts.ready.then(initialize);
