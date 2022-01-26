import React from 'react';
import { connect } from 'react-redux';
import { userApi, dialogsApi } from 'utils/api';

import { Sidebar } from 'components';

const SidebarContainer = ({ user }) => {
  const [visible, setIsVisible] = React.useState(false);
  const [inputValue, setInputValue] = React.useState('');
  const [messageText, setMessageText] = React.useState('');
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState(false);

  const onClose = () => {
    setIsVisible(false);
  };

  const onShow = () => {
    setIsVisible(true);
  };

  const onSearch = (value) => {
    setIsLoading(true);
    userApi
      .findUsers(value)
      .then(({ data }) => {
        setUsers(data);
        setIsLoading(false);
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  const onAddDialog = () => {
    dialogsApi
      .create({
        partner: selectedUserId,
        text: messageText,
      })
      .then(onClose)
      .catch(() => {
        setIsLoading(false);
      });
  };

  const handleChangeInput = (value) => {
    setInputValue(value);
  };

  const onSelectUser = (user) => {
    setSelectedUserId(user);
  };

  const onChangeTextArea = (e) => {
    setMessageText(e.target.value);
  };

  return (
    <Sidebar
      user={user}
      inputValue={inputValue}
      visible={visible}
      isLoading={isLoading}
      onClose={onClose}
      onShow={onShow}
      onSearch={onSearch}
      onChangeInput={handleChangeInput}
      onSelectUser={onSelectUser}
      onModalOk={onAddDialog}
      messageText={messageText}
      onChangeTextArea={onChangeTextArea}
      selectedUserId={selectedUserId}
      users={users}
    />
  );
};

export default connect(({ user }) => ({ user: user.data }))(SidebarContainer);
