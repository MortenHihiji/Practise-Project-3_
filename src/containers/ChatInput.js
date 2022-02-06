import React from 'react';
import { connect } from 'react-redux';
import { filesApi } from 'utils/api';

import { ChatInput as ChatInputBase } from 'components';

import { messagesActions } from 'redux/actions';

const ChatInput = ({ fetchSendMessage, currentDialogId }) => {
  window.navigator.getUserMedia =
    window.navigator.getUserMedia ||
    window.navigator.mozGetUserMedia ||
    window.navigator.msGetUserMedia ||
    window.navigator.webkitGetUserMedia;

  const [value, setValue] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);
  const [attachments, setAttachments] = React.useState([]);
  const [mediaRecorder, setMediaRecorder] = React.useState(null);
  const [emojiPickerVisible, setShowEmojiPickerVisible] = React.useState(false);

  const toggleEmojiPicker = () => {
    setShowEmojiPickerVisible(!emojiPickerVisible);
  };

  const onRecord = () => {
    if (navigator.getUserMedia) {
      navigator.getUserMedia({ audio: true }, onRecording, onError);
    }
  };

  const onRecording = (stream) => {
    const recorder = new MediaRecorder(stream);
    setMediaRecorder(recorder);
    recorder.start();

    recorder.onstart = () => {
      setIsRecording(true);
    };

    recorder.onstop = (e) => {
      setIsRecording(false);
    };

    recorder.onDataAvailable = (e) => {
      const audioUrl = window.URL.createObjectURL(e.data);
      new Audio(audioUrl).play();
    };
  };

  const onError = (err) => {
    console.log('The following error has occured: ' + err);
  };

  const handleOutsideClick = (el, e) => {
    if (el && !el.contains(e.target)) {
      setShowEmojiPickerVisible(false);
    }
  };

  const addEmoji = (obj) => {
    const { colons } = obj;
    setValue((value + ' ' + colons).trim());
  };

  const sendMessage = () => {
    fetchSendMessage(value, currentDialogId);
    setValue('');
  };

  const handleSendMessage = (e) => {
    if (e.keyCode === 13) {
      sendMessage();
    }
  };

  const onStopRecording = () => {
    mediaRecorder.stop();
  };

  React.useEffect(() => {
    const el = document.querySelector('.chat-input__smile-btn');

    document.addEventListener('click', handleOutsideClick.bind(this, el));

    return () => {
      document.removeEventListener('click', handleOutsideClick.bind(this, el));
    };
  }, []);

  //   const onSelectFiles = (files) => {
  //     for (let i = 0; i < files.length; i++) {
  //       const file = files[i];
  //       const uid = Math.round(Math.random() * 1000),
  //       setAttachments([
  //           ...attachments, {
  //               name: file.name,
  //               uid,
  //               status: "uploading"
  //           }
  //       ])
  //       filesApi.upload(file).then(({ data }) => {
  //           setAttachments(attachments.map(item => {
  //               if (item.uid === uid) {
  //                   item = {
  //                       uid: data.file._id,
  //                       name: data.file.filename,
  //                       url: data.file.url,
  //                       status: "done",
  //                     }
  //               }
  //           }))
  //       });
  //     }
  //   };

  return (
    <ChatInputBase
      value={value}
      setValue={setValue}
      emojiPickerVisible={emojiPickerVisible}
      setShowEmojiPickerVisible={setShowEmojiPickerVisible}
      toggleEmojiPicker={toggleEmojiPicker}
      handleSendMessage={handleSendMessage}
      addEmoji={addEmoji}
      sendMessage={sendMessage}
      attachments={attachments}
      //   onSelectFiles={onSelectFiles}
      isRecording={isRecording}
      onRecord={onRecord}
      onStopRecording={onStopRecording}
    />
  );
};

export default connect(({ dialogs }) => dialogs, messagesActions)(ChatInput);
