import React from 'react';
import PropTypes from 'prop-types';
import { UploadField } from '@navjobs/upload';
import { Picker } from 'emoji-mart';

import { Input } from 'antd';
import {
  SmileOutlined,
  CameraOutlined,
  AudioOutlined,
  SendOutlined,
  CloseCircleOutlined,
} from '@ant-design/icons';

import { useOutside } from 'utils/helpers';

import { UploadFiles } from 'components';

import './ChatInput.scss';

const { TextArea } = Input;

const ChatInput = (props) => {
  const {
    emojiPickerVisible,
    value,
    setValue,
    addEmoji,
    handleSendMessage,
    toggleEmojiPicker,
    sendMessage,
    attachments,
    onSelectFiles,
    isRecording,

    onStopRecording,
    onRecord,
  } = props;

  return (
    <>
      <div className="chat-input">
        <div className="chat-input__smile-btn">
          <div className="chat-input__emoji-picker">
            {emojiPickerVisible && (
              <Picker onSelect={(emojiTag) => addEmoji(emojiTag)} set="apple" />
            )}
          </div>
          <SmileOutlined onClick={toggleEmojiPicker} />
        </div>
        {isRecording ? (
          <div className="chat-input__record-status">
            <i className="chat-input__record-status-bubble"></i>
            Recording...
            <CloseCircleOutlined className="stop-recording" onClick={onStopRecording} />
          </div>
        ) : (
          <TextArea
            onChange={(e) => setValue(e.target.value)}
            onKeyUp={handleSendMessage}
            size="large"
            placeholder="Введите текст сообщения…"
            value={value}
            autoSize={{ minRows: 1, maxRows: 6 }}
          />
        )}
        <div className="chat-input__actions">
          <UploadField
            onFiles={onSelectFiles}
            containerProps={{
              className: 'chat-input__actions-upload-btn',
            }}
            uploadProps={{
              accept: '.jpg,.jpeg,.png,.gif,.bmp',
              multiple: 'multiple',
            }}>
            <CameraOutlined />
          </UploadField>
          {isRecording || value ? (
            <SendOutlined onClick={sendMessage} />
          ) : (
            <div className="chat-input__record-btn">
              <AudioOutlined onClick={onRecord} />
            </div>
          )}
        </div>
      </div>
      <div className="chat-input__attachments">
        <UploadFiles attachments={attachments} />
      </div>
    </>
  );
};

ChatInput.propTypes = {
  className: PropTypes.string,
};

export default ChatInput;
