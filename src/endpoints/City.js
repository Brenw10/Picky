import Axios from '../config/Axios';

function getAll() {
  return Axios.get('city').then(result => result.data);
}

export default {
  getAll
};