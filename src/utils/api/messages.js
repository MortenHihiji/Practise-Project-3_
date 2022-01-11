import { axios } from 'core';

const messagesApi = {
  getAllByDialogId: (id) => axios.get('/messages?dialog=' + id),
  send: (text, dialogId) =>
    axios.post('/messages', {
      text: text,
      dialog_id: dialogId,
    }),
};

export default messagesApi;
