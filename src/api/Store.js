import Axios from '../config/Axios';

function search(query) {
  return Axios.get(`/store/search`, { params: query });
}

function create(token, query) {
  return Axios.post('/store', query, { headers: { Authorization: token } });
}

export default {
  search,
  create,
};