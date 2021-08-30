import Axios from '../config/Axios';

function create(name, email, password) {
  return Axios.post('/user', { name, email, password });
}

function getMyself(token) {
  return Axios.get('/user/myself', { headers: { Authorization: token } });
}

function search(token, params) {
  return Axios.get('/user/search', { params, headers: { Authorization: token } });
}

function setStore(token, _user, _store) {
  return Axios.post(`/user/${_user}/store`, { _store }, { headers: { Authorization: token } });
}

export default {
  create,
  getMyself,
  search,
  setStore,
};