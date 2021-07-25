import Axios from '../config/Axios';

function getAll() {
  return Axios.get('category').then(result => result.data);
}

export default {
  getAll
};