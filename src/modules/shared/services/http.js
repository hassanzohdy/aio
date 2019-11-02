import React from 'react';
import axios from 'axios';

class Http extends React.component {
  // Global variable
  endPoint = 'EndPointHere';
  app_token = 'AppTokenHere';

  request_config() {
    // Default configuration --------------------------------
    axios.defaults.baseURL = this.endPoint; // EndPoint
    axios.defaults.headers.common['X-APP-Token'] = this.app_token; // App Token
    // -------------------------------------------------------
  }

  request_config()

  list(api) {
    // list all data
    return axios.get(`${this.endPoint}/${api}`);
  }

  get(api, id) {
    // get single data
    return axios.get(`${this.endPoint}/${api}/${id}`);
  }

  post(api, data) {
    // create new data
    return axios.post(`${this.endPoint}/${api}`, data);
  }

  put(api, id, data) {
    // update single data
    return axios.put(`${this.endPoint}/${api}/${id}`, data);
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

export default Http;
