import React from 'react';
import { connect } from 'react-redux';

import { messagesActions } from 'redux/actions';
import { Messages as BaseMessages } from 'components';

// class Dialogs extends React.Component {
//   componentDidUpdate(prevProps) {
//     const { fetchMessages, currentDialogId } = this.props;
//     if (prevProps.currentDialogId !== this.props.currentDialogId) {
//       fetchMessages(currentDialogId);
//     }
//   }

//   render() {
//     const { items } = this.props;
//     return <BaseMessages items={items} />;
//   }
// }

const Dialogs = ({ currentDialogId, fetchMessages, items, isLoading }) => {
  const messagesRef = React.useRef(null);
  React.useEffect(() => {
    if (currentDialogId) {
      fetchMessages(currentDialogId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentDialogId]);

  React.useEffect(() => {
    messagesRef.current.scrollTo(0, 99999);
  }, [items]);

  return <BaseMessages blockRef={messagesRef} items={items} isLoading={isLoading} />;
};

export default connect(
  ({ dialogs, messages }) => ({
    currentDialogId: dialogs.currentDialogId,
    items: messages.items,
    isLoading: messages.isLoading,
  }),
  messagesActions,
)(Dialogs);
