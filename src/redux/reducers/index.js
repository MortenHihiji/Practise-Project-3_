import { combineReducers } from 'redux';

const reducers = ['messages', 'dialogs', 'user', 'attachments'];

const rootReducer = combineReducers(
  reducers.reduce((initial, name) => {
    initial[name] = require(`./${name}`).default;
    return initial;
  }, {}),
);

export default rootReducer;
