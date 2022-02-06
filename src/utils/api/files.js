import { axios } from 'core';

const files = {
  upload: () => {
    const formData = new FormData();
    formData.append('image', files);
    return axios.post('/files', formData, {
      header: {
        'Contet-Type': 'multipart/form-data',
      },
    });
  },
};

export default files;
