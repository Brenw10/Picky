import Axios from '../config/Axios';

function search(query) {
  return Axios.get('/product/search', { params: query });
}

function create(token, _id, query) {
  return Axios.post(`/store/${_id}/product`, query, { headers: { Authorization: token } });
}

function remove(token, _store, _product) {
  return Axios.delete(`/store/${_store}/product/${_product}`, { headers: { Authorization: token } });
}

export default {
  search,
  create,
  remove,
};