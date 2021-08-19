import React from 'react';
import classNames from 'classnames';

import { IconReaded } from '../';

import './DialogItem.scss';

const getAvatar = (avatar) => {
  if (avatar) {
    return (
      <img
        src="https://sun6-23.userapi.com/s/v1/ig2/6hJAFUGC_d_Zhs-W1F-qsPfIQ3_lo1BE2U0u10WR-oZulFLo9Dkl9GFnkDVH4P0G9sngzQGPaBID2omEhGB8rLDw.jpg?size=200x200&quality=96&crop=0,87,1242,1242&ava=1"
        alt=""
      />
    );
  } else {
    //make avatar
  }
};

const DialogItem = ({ user, message, unreaded }) => (
  <div className={classNames('dialogs__item', { 'dialogs__item--online': user.isOnline })}>
    <div className="dialogs__item-avatar">{getAvatar(true)}</div>
    <div className="dialogs__item-info">
      <div className="dialogs__item-info-top">
        <b>Фёдор Достоевкий</b>
        <span>
          {/* <Time date={new Date()} /> */}
          13:03
        </span>
      </div>
      <div className="dialogs__item-info-bottom">
        <p>
          Мы все свидетельствуем вам глубочайшее наше почтение и целиуем ваши ручки, дражайший
          папаенька: Михайла, Федор, Варвара и Андрюша
        </p>
        <IconReaded isMe={true} isReaded={false} />
        {unreaded > 0 && (
          <div className="dialogs__item-info-bottom-count">{unreaded > 9 ? '+9' : unreaded}</div>
        )}
      </div>
    </div>
  </div>
);

export default DialogItem;
