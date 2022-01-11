import React from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import socket from 'core/socket';

import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [filtred, setFiltredItems] = React.useState(Array.from(items));

  const onChangeInput = (value = '') => {
    setFiltredItems(
      items.filter(
        (dialog) =>
          dialog.author.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0 ||
          dialog.partner.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
    setInputValue(value);
  };

  React.useEffect(() => {
    if (items.length) {
      onChangeInput();
    }
  }, [items]);

  const onNewDialog = () => {
    fetchDialogs();
  };

  React.useEffect(() => {
    fetchDialogs();
    // if (!items.length) {
    // } else {
    //   setFiltredItems(items);
    // }

    socket.on('SERVER:DIALOG_CREATED', onNewDialog);
    return () => socket.removeListener('SERVER:DIALOG_CREATED', onNewDialog);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BaseDialogs
      userId={userId}
      items={filtred}
      onSearch={onChangeInput}
      inputValue={inputValue}
      onSelectDialog={setCurrentDialogId}
      currentDialogId={currentDialogId}
    />
  );
};

export default connect(({ dialogs }) => dialogs, dialogsActions)(Dialogs);
