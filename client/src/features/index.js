/**
 * @Route Default
 * */
export { default as Home } from './Home';

/**
 * @Route Auth
 * */
export { default as Login } from './Auth/Login';
export { default as Register } from './Auth/Register';
export { default as VerifyAccount } from './Auth/VerifyAccount';

/**
 * @Route Dashboard
 * */
export { default as Dashboard } from './Dashboard';
