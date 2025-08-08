import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token ? token : null;
}

export function tokenLoader() {
  return getAuthToken();
}

export function checkAuthToken() {
  const token = getAuthToken();
  if (!token) {
    return redirect('/auth?mode=login');
  }
  return null;
}