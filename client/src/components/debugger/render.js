import React, { StrictMode } from 'react';

import { isDevelopment } from 'helpers/lang';

export default ({ children }) =>
  isDevelopment() ? <StrictMode>{children}</StrictMode> : children;
