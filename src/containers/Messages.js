import React from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import socket from 'core/socket';

import { Messages as BaseMessages } from 'components';

const Dialogs = ({
  currentDialogId,
  fetchMessages,
  addMessage,
  items,
  user,
  isLoading,
  removeMessageById,
}) => {
  // if(!currentDialogId) {
  //     return null;
  // }

  const messagesRef = React.useRef(null);

  const onNewMessage = (data) => {
    addMessage(data);
  };

  React.useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    socket.on('SERVER:NEW_MESSAGE', onNewMessage);

    return () => {
      socket.removeListener('SERVER:NEW_MESSAGE', onNewMessage);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialogId]);

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return (
    <BaseMessages
      user={user}
      blockRef={messagesRef}
      items={items}
      isLoading={isLoading && !user}
      onRemoveMessage={removeMessageById}
    />
  );
};

export default connect(
  ({ dialogs, messages, user }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
    user: user.data,
  }),
  messagesActions,
)(Dialogs);
