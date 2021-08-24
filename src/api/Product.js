import Axios from '../config/Axios';

function search(_store, city, name, category) {
  return Axios.get('/product/search', { params: { _store, city, name, category } });
}

function create(token, _store, query) {
  return Axios.post(`/store/${_store}/product`, query, { headers: { Authorization: token } });
}

function remove(token, _store, _product) {
  return Axios.delete(`/store/${_store}/product/${_product}`, { headers: { Authorization: token } });
}

export default {
  search,
  create,
  remove,
};