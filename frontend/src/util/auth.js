export function getAuthToken() {
  const token = localStorage.getItem('token');
  return token ? token : null;
}

export function tokenLoader() {
  return getAuthToken();
}