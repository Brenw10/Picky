import Axios from '../config/Axios';

function create(name, email, password) {
  return Axios.post('/user', { name, email, password });
}

export default {
  create,
};