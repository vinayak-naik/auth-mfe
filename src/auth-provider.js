import { AUTH_LOCAL_STORAGE_KEY } from './constants';

const localStorageKey = AUTH_LOCAL_STORAGE_KEY;

async function getToken() {
  return window.localStorage.getItem(localStorageKey);
}

function handleUserResponse({ payload }) {
  window.localStorage.setItem(localStorageKey, payload.token);
  return payload;
}

function login({ username, password }) {
  return client('login', { email: username, password }).then(
    handleUserResponse,
  );
}

function register({ username, password }) {
  return client('register', { username, password }).then(handleUserResponse);
}

async function logout() {
  window.localStorage.removeItem(localStorageKey);
}

// an auth provider wouldn't use your client, they'd have their own
// so that's why we're not just re-using the client
const authURL = process.env.REACT_APP_AUTH_API_URL;

async function client(endpoint, data) {
  const config = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  };

  return window
    .fetch(`${authURL}/${endpoint}`, config)
    .then(async (response) => {
      const data = await response.json();
      if (response.ok) {
        return data;
      } else {
        return Promise.reject(data);
      }
    });
}

export { getToken, login, register, logout, localStorageKey };
