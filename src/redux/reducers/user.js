const initialState = {
  data: null,
  token: window.localStorage.token,
  isAuth: !!window.localStorage.token,
};

const user = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'USER:SET_DATA':
      return {
        ...state,
        data: payload,
        isAuth: true,
        token: window.localStorage.token,
      };
    default:
      return state;
  }
};

export default user;
