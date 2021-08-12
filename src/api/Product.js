import Axios from '../config/Axios';

function searchByStore(_id, query) {
  return Axios.get(`/store/${_id}/product/search`, { params: query });
}

function searchByCategory(category, query) {
  return Axios.get(`/product/category/${category}/search`, { params: query });
}

function update(token, _id, productId, query) {
  return Axios.put(`/store/${_id}/product/${productId}`, query, { headers: { Authorization: token } });
}

export default {
  searchByStore,
  searchByCategory,
  update,
};