import { axios } from 'core';

const dialogsApi = {
  signIn: (postData) => axios.post('/user/signin', postData),
  signUp: (postData) => axios.post('/user/signup', postData),
  verifyHash: (hash) => axios.get('/user/verify?hash=' + hash),
  getMe: () => axios.get('/user/me'),
  findUsers: (query) => axios.get('/user/find?query=' + query),
};

export default dialogsApi;
