// Function to store JWT token in LocalStorage
export const storeAuthToken = (token: string | null) => {
  if (token === null){
    localStorage.removeItem('jwtToken')
  }else{
    localStorage.setItem('jwtToken', token);
  }
};

// Function to retrieve JWT token from LocalStorage
export const getAuthToken = (): string | null => {
  return localStorage.getItem('jwtToken');
};

// Function to remove JWT token from LocalStorage (logout)
export const removeAuthToken = () => {
  localStorage.removeItem('jwtToken');
};

// import { storeAuthToken, getAuthToken, removeAuthToken } from './authentication';

// Storing the token
// storeAuthToken('your_jwt_token_here');

// Retrieving the token
// const token = getAuthToken();
// console.log(token);

// Removing the token (logout)
// removeAuthToken();
