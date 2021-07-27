import Axios from '../config/Axios';

function getAll() {
  return Axios.get('category');
}

export default {
  getAll
};