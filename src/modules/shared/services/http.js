import axios from 'axios';

// Global variable
const endPoint = 'EndPointHere';

// Default configuration --------------------------------
axios.defaults.baseURL = endPoint; // EndPoint
axios.defaults.headers.common['X-APP-Token'] = 'Token Here'; // App Token
// -------------------------------------------------------

// Global requests methods -------------------------------

function list(api) {
  // list all data
  return axios.get(`${endPoint}/${api}`);
}

function get(api, id) {
  // get single data
  return axios.get(`${endPoint}/${api}/${id}`);
}

function post(api, data) {
  // create new data
  return axios.post(`${endPoint}/${api}`, data);
}

function put(api, id, data) {
  // update single data
  return axios.put(`${endPoint}/${api}/${id}`, data);
}

function destroy(api, id) {
  // delete single data
  return axios.delete(`${endPoint}/${api}/${id}`);
}

function destroy_all(api, ids) {
  // delete multiple data
  return axios.delete(`${endPoint}/${api}?ids=${ids}`);
}
// -------------------------------------------------------

export default {
  get,
  post,
  list,
  put,
  destroy,
  destroy_all
};
