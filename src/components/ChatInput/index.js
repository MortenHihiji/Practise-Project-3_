import React from 'react';
import PropTypes from 'prop-types';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import { Input } from 'antd';
import { SmileOutlined, CameraOutlined, AudioOutlined, SendOutlined } from '@ant-design/icons';

import './ChatInput.scss';

const ChatInput = (props) => {
  const [value, setValue] = React.useState('');
  const [emojiPickerVisible, setShowEmojiPickerVisible] = React.useState(false);
  const { onSendMessage, currentDialogId } = props;

  const toggleEmojiPicker = () => {
    setShowEmojiPickerVisible(!emojiPickerVisible);
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      onSendMessage(value, currentDialogId);
      setValue('');
    }
  };

  return (
    <div className="chat-input">
      <div className="chat-input__smile-btn">
        {emojiPickerVisible && (
          <div className="chat-input__emoji-picker">
            <Picker set="apple" />
          </div>
        )}
        <SmileOutlined onClick={toggleEmojiPicker} />
      </div>
      <Input
        onChange={(e) => setValue(e.target.value)}
        onKeyUp={handleSendMessage}
        size="large"
        placeholder="Введите текст сообщения…"
        value={value}
      />
      <div className="chat-input__actions">
        <UploadField
          onFiles={(files) => console.log(files)}
          containerProps={{
            className: 'chat-input__actions-upload-btn',
          }}
          uploadProps={{
            accept: '.jpg,.jpeg,.png,.gif,.bmp',
            multiple: 'multiple',
          }}>
          <CameraOutlined />
        </UploadField>
        {value ? <SendOutlined /> : <AudioOutlined />}
      </div>
    </div>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
