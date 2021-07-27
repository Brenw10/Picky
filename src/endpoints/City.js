import Axios from '../config/Axios';

function getAll() {
  return Axios.get('/store/city');
}

export default {
  getAll,
};