import { axios } from 'core';

const messagesApi = {
  getAllByDialogId: (id) => axios.get('/messages?dialogs=' + id),
};

export default messagesApi;
