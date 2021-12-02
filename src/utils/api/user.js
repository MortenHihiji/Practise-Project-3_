import { axios } from 'core';

const dialogsApi = {
  login: (postData) => axios.post('/user/login', postData),
  getMe: () => axios.get('/user/me'),
};

export default dialogsApi;
