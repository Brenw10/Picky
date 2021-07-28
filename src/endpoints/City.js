import Axios from '../config/Axios';

function getAll() {
  return Axios.get('/city');
}

export default {
  getAll,
};