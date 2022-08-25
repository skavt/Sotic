import axios from 'axios';
import Vue from "vue";

const axiosClient = axios.create();

axiosClient.interceptors.request.use(config => {
  return config;
});

axiosClient.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosClient;

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axiosClient;
  }
});