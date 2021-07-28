import Axios from '../config/Axios';

function search(query) {
  return Axios.get(`/store/search`, { params: query });
}

export default {
  search,
};