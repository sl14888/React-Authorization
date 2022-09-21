import { useSelector } from 'react-redux';

export function useAuth() {
  const { email, token, id, password } = useSelector((state) => state.user);

  return {
    isAuth: !!email,
    email,
    password,
    token,
    id,
  };
}
