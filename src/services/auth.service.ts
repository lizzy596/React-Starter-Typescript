import React from 'react';
import { BehaviorSubject } from 'rxjs';
import { redirect } from "react-router-dom"
import { httpCaller } from './callers';




const userSubject = new BehaviorSubject(null);

export const authService = {
  register,
  logout,
  refreshToken,
  login,
  useUserAuth,
  user: userSubject.asObservable(),
  get userValue() {
    return userSubject.value;
  }
};

export function register({ firstName, lastName, email, password }: { firstName: string; lastName: string; email: string; password: string }) {
  return httpCaller.post('/auth/register', { firstName, lastName, email, password });
}

export async function login({ email, password }: { email: string; password: string }) {
  const response = await httpCaller.post('/auth/login', { email, password });
  const { user, tokens } = response.data;
  const { token, expiration } = tokens.accessToken;
  userSubject.next({ ...user, token });
  startRefreshTokenTimer(expiration.expDate);
  return user;
}

export async function refreshToken() {
  stopRefreshTokenTimer();
  return httpCaller
    .post(`/auth/refresh-tokens`)
    .then((response) => {
      const { user, tokens } = response.data;
      const { token, expiration } = tokens.accessToken;
      userSubject.next({ ...user, token });
      startRefreshTokenTimer(expiration.expSeconds);
      return user;
    })
    .catch(() => {
      console.error('You must login to access');
      userSubject.next(null);
    });
}

export function useRedirectLoggedIn(navigate:any) {
  const [user, setUser] = React.useState();
  React.useEffect(() => {
    if (user) {
      navigate('/', { replace: true });
    }
    // eslint-disable-next-line
  }, [user]);

  return { user, setUser };
}

export function useUserAuth() {
  const [user, setUser] = React.useState<any>();

  React.useEffect(() => {
    const subscription = authService.user.subscribe((x) => setUser(x));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return user;
}

let refreshTokenTimeout: any

function startRefreshTokenTimer(exp: number) {
  const timeInSeconds = exp - Math.floor(Date.now() / 1000) - 60;
  const timeout = timeInSeconds * 1000;
  refreshTokenTimeout = setTimeout(refreshToken, timeout);
}

function stopRefreshTokenTimer() {
  clearTimeout(refreshTokenTimeout);
}

export function logout() {
  stopRefreshTokenTimer();
  httpCaller
    .post(`/auth/logout`, {})
    .finally(() => {
      userSubject.next(null);
      redirect('/'); 
    })
    .catch(() => {
      redirect('/');
    });
}

export default authService;