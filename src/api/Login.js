import Axios from '../config/Axios';

function getToken(email, password) {
  return Axios.post('/login', { email, password });
}

export default {
  getToken,
};