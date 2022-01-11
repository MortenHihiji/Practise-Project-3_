import React from 'react';
import orderBy from 'lodash/orderBy';
import { Input, Empty } from 'antd';

import { DialogItem } from '../';

import './Dialogs.scss';

const { Search } = Input;

const Dialogs = ({ items, userId, onSearch, inputValue, currentDialogId, onSelectDialog }) => (
  <div className="dialogs">
    <div className="dialogs__search">
      <Search
        placeholder="Поиск среди контактов"
        onChange={(e) => onSearch(e.target.value)}
        value={inputValue}
        style={{ width: 300 }}
      />
    </div>
    {items.length ? (
      orderBy(items, ['created_at'], ['desc']).map(
        (item) =>
          console.log(item, 22222222, item.author.id, userId) || (
            <DialogItem
              onSelect={onSelectDialog}
              key={item._id}
              message={item}
              isMe={item.author._id === userId}
              currentDialogId={currentDialogId}
              {...item}
            />
          ),
      )
    ) : (
      <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} description="Ничего не найдено" />
    )}
  </div>
);

export default Dialogs;
