import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080';
axios.defaults.headers.post['Content-type'] = 'application/json';

export const request = (method: string, url: string, data: Record<string, unknown>) => {
  return axios({
    method: method,
    url: url,
    data: data
  });
};