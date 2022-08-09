import axios from 'axios';
import { LocalStorageKeys } from '../enum/LocalStorageKeys.enum';

const reqInstance = axios.create({
  baseURL: 'http://localhost:3002',
  headers: {
    Authorization: `Bearer ${localStorage.getItem(LocalStorageKeys.TOKEN)}`,
    'content-type': 'application/json',
  },
});

export default reqInstance;
