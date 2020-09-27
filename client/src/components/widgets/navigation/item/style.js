import styled from 'styled-components';

export default component => styled(component)`
  & > a {
    &[aria-current] {
      font-weight: bold;
    }
  }
`;
