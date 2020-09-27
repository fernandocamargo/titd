import { useAuthentication } from 'hooks';

export default () => {
  const { logout, logged } = useAuthentication();

  return { logged, logout };
};
