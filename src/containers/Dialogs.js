import React from 'react';
import { connect } from 'react-redux';

import { dialogsActions } from 'redux/actions';
import { Dialogs as BaseDialogs } from 'components';

const Dialogs = ({ fetchDialogs, currentDialogId, setCurrentDialogId, items, userId }) => {
  const [inputValue, setInputValue] = React.useState('');
  const [filtred, setFiltredItems] = React.useState(Array.from(items));

  const onChangeInput = (value) => {
    setFiltredItems(
      items.filter(
        (dialog) => dialog.user.fullname.toLowerCase().indexOf(value.toLowerCase()) >= 0,
      ),
    );
    setInputValue(value);
  };

  React.useEffect(() => {
    if (!items.length) {
      fetchDialogs();
    } else {
      setFiltredItems(items);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

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
