/* The Token Manager:
 You are developing a user authentication system, and you need to manage user authentication tokens. Implement a function named setAuthToken that takes an authentication token and sets it in localStorage with an expiration time.*/

function setAuthToken(user_name, auth_token, expirationTimeInSeconds) {
  const expirationTime = Date.now() + expirationTimeInSeconds * 1000;
  const authTokenObject = {
    token: auth_token,
    expires: expirationTime,
  };
  localStorage.setItem(user_name, JSON.stringify(authTokenObject));

  setTimeout(() => {
    localStorage.removeItem(user_name);
  }, expirationTimeInSeconds * 1000);
}

function getAuthToken(user_name) {
  const authTokenObject = JSON.parse(localStorage.getItem(user_name));
  if (!authTokenObject) {
    return null;
  }

  if (Date.now() > authTokenObject.expires) {
    localStorage.removeItem(user_name);
    return null;
  }

  return authTokenObject.token;
}

const token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
const user_name = "Shiraz Mazhar";
const expirationTimeInSeconds = 8;

setAuthToken(user_name, token, expirationTimeInSeconds);
const retrievedToken = getAuthToken(user_name);
console.log(retrievedToken);
