import React from 'react';
import classNames from 'classnames';
import format from 'date-fns/format';
import isToday from 'date-fns/isToday';
import isYesterday from 'date-fns/isYesterday';

import { IconReaded, Avatar } from '../';

const getMessageTime = (created_at) => {
  if (isToday(created_at)) {
    return format(created_at, 'HH:mm');
  } else if (isYesterday(created_at)) {
    return 'Вчера';
  } else {
    return format(created_at, 'dd.MM.yyyy');
  }
};

const DialogItem = ({ user, unreaded, created_at, text, isMe }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">
      <Avatar user={user} />
    </div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>{user.fullname}</b>
        <span>{getMessageTime(new Date(created_at))}</span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>{text}</p>
        {isMe && <IconReaded isMe={true} isReaded={false} />}
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
