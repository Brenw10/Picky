import Axios from '../config/Axios';

function search(city, name, minProducts) {
  return Axios.get(`/store/search`, { params: { city, name, minProducts } });
}

function create(token, query) {
  return Axios.post('/store', query, { headers: { Authorization: token } });
}

export default {
  search,
  create,
};