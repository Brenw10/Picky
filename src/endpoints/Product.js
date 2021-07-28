import Axios from '../config/Axios';

function searchByStore(_id, query) {
  return Axios.get(`/store/${_id}/product/search`, { params: query });
}

function searchByCategory(category, query) {
  return Axios.get(`/product/category/${category}/search`, { params: query });
}

export default {
  searchByStore,
  searchByCategory,
};