import Axios from '../config/Axios';

function getByName(_id, name) {
  return Axios.get(`/store/${_id}/product/${name}`);
}

export default {
  getByName,
};