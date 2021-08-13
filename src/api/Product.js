import Axios from '../config/Axios';

function search(query) {
  return Axios.get('/product/search', { params: query });
}

function update(token, _id, productId, query) {
  return Axios.put(`/store/${_id}/product/${productId}`, query, { headers: { Authorization: token } });
}

function create(token, _id, query) {
  return Axios.post(`/store/${_id}/product`, query, { headers: { Authorization: token } });
}

export default {
  search,
  update,
  create,
};