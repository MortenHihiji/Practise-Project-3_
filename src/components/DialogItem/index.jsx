import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';
import { Link } from 'react-router-dom';

import { IconReaded, Avatar } from '../';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  } else if (isYesterday(created_at)) {
    return 'Вчера';
  } else {
    console.log(created_at);
    return format(created_at, 'dd.MM.yyyy');
  }
};

const DialogItem = ({
  _id,
  user,
  unreaded,
  createdAt,
  text,
  isMe,
  onSelect,
  currentDialogId,
  lastMessage,
}) => (
  <Link to={`/dialog/${_id}`}>
    <div
      className={classNames('dialogs__item', {
        'dialogs__item--online': lastMessage.user.isOnline,
        'dialogs__item--selected': currentDialogId === _id,
      })}
      onClick={onSelect.bind(this, _id)}>
      <div className="dialogs__item-avatar">
        <Avatar user={lastMessage.user} />
      </div>
      <div className="dialogs__item-info">
        <div className="dialogs__item-info-top">
          <b>{lastMessage.user.fullname}</b>
          {console.log(createdAt, ' index')}
          <span>{getMessageTime(new Date(lastMessage.createdAt))}</span>
        </div>
        <div className="dialogs__item-info-bottom">
          <p>{lastMessage.text}</p>
          {isMe && <IconReaded isMe={true} isReaded={false} />}
          {lastMessage.unreaded > 0 && (
            <div className="dialogs__item-info-bottom-count">
              {lastMessage.unreaded > 9 ? '+9' : lastMessage.unreaded}
            </div>
          )}
        </div>
      </div>
    </div>
  </Link>
);

export default DialogItem;
