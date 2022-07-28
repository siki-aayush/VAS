import { LocalStorageKeys } from '../enum/LocalStorageKeys.enum';

/**
 * addUserLoginToLocalStorage.
 * Adds whether the user is logged in or not to the local storage
 * @param {string} isLoggedIn
 */
export const addUserLoginToLocalStorage = (isLoggedIn: string) => {
  localStorage.setItem(LocalStorageKeys.IS_LOGGED_IN, isLoggedIn);
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
    return `${loggedInStatus}` === 'true' ? true : false;
  }
};

/**
 * clearUserLoginFromLocalStorage.
 * Clears the user logged in value from the local storage
 */
export const clearUserLoginFromLocalStorage = () => {
  localStorage.removeItem(LocalStorageKeys.IS_LOGGED_IN);
};
