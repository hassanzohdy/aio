import axios from 'axios';

class Http {
  // Global variable
  endPoint = 'EndPointHere';
  app_token = 'AppTokenHere';

  request_config() {
    // Default configuration --------------------------------
    axios.defaults.baseURL = this.endPoint; // EndPoint
    axios.defaults.headers.common['Authorization'] = this.app_token; // App Token
    // -------------------------------------------------------
  }

  list(api) {
    // list all data
    return axios.get(`${api}`);
  }

  get(api, id, option) {
    // get single data
    return axios.get(`${api}/${id}`);
  }

  post(api, data) {
    // create new data
    return axios.post(`${api}`, data);
  }

  put(api, id, data) {
    // update single data
    return axios.put(`${api}/${id}`, data);
  }

  destroy(api, id) {
    // delete single data
    return axios.delete(`${this.endPoint}/${api}/${id}`);
  }

  destroy_all(api, ids) {
    // delete multiple data
    return axios.delete(`${this.endPoint}/${api}?ids=${ids}`);
  }
}

const requestServices = new Http
requestServices.request_config()

export default requestServices;
