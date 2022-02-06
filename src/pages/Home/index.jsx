import React from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { Messages, ChatInput, Status } from 'containers';
import { Sidebar } from 'containers';

import { Empty } from 'antd';

import './Home.scss';

import { dialogsActions } from 'redux/actions';

const Home = (props) => {
  const { setCurrentDialogId, currentDialogId } = props;

  React.useEffect(() => {
    const {
      location: { pathname },
    } = props;
    const dialogId = pathname.split('/').pop();
    setCurrentDialogId(dialogId);
  }, [props.location.pathname]);

  return (
    <section className="home">
      <div className="chat">
        <Sidebar />
        <div className="chat__dialog">
          <Status />

          {currentDialogId ? <Messages /> : <Empty description="Откройте диалог" />}
          <div className="chat__dialog-input">{currentDialogId ? <ChatInput /> : null}</div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(connect(({ dialogs }) => dialogs, dialogsActions)(Home));
