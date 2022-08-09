import { LocalStorageKeys } from '../enum/LocalStorageKeys.enum';

/**
 * addUserLoginToLocalStorage.
 * Adds whether the user is logged in or not to the local storage
 * @param {string} isLoggedIn
 */
export const addUserLoginToLocalStorage = (isLoggedIn: string, token: string) => {
  localStorage.setItem(LocalStorageKeys.IS_LOGGED_IN, isLoggedIn);
  localStorage.setItem(LocalStorageKeys.TOKEN, token);
};

export const getUserTokenFromLocalStorage = () => {
  return localStorage.getItem(LocalStorageKeys.TOKEN);
};

/**
 * isUserLoggedIn.
 * Checks whether the user is logged in or not
 * @returns {boolean}
 */
export const getUserLoginFromLocalStorage = (): boolean => {
  const loggedInStatus = localStorage.getItem(LocalStorageKeys.IS_LOGGED_IN);
  if (loggedInStatus === null) {
    return false;
  } else {
    if (`${loggedInStatus}` === 'true') {
      return true;
    } else {
      return false;
    }
  }
};

/**
 * clearUserLoginFromLocalStorage.
 * Clears the user logged in value from the local storage
 */
export const clearUserLoginFromLocalStorage = () => {
  localStorage.removeItem(LocalStorageKeys.IS_LOGGED_IN);
};
