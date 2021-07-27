import Axios from '../config/Axios';

function getById(_id) {
  return Axios.get(`store/${_id}`);
}

function getAllFromCity(city) {
  return Axios.get(`store/city/${city}`)
}

export default {
  getAllFromCity,
  getById,
};