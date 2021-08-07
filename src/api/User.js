import Axios from '../config/Axios';

function create(name, email, password) {
  return Axios.post('/user', { name, email, password });
}

function getMyself(token) {
  return Axios.get('/user/myself', { headers: { Authorization: token } });
}

export default {
  create,
  getMyself,
};