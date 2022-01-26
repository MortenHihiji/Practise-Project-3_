import React from 'react';

import { Modal, Select, Input, Button, Form } from 'antd';
import { TeamOutlined, FormOutlined } from '@ant-design/icons';
import { Dialogs } from 'containers';

import './Sidebar.scss';

const { Option } = Select;
const { TextArea } = Input;

const Sidebar = ({
  user,
  visible,
  inputValue,
  messageText,
  selectedUserId,
  isLoading,
  users,
  onShow,
  onClose,
  onSearch,
  onChangeInput,
  onSelectUser,
  onChangeTextArea,
  onModalOk,
}) => {
  const options = users.map((user) => <Option key={user._id}>{user.fullname}</Option>);

  return (
    <div className="chat__sidebar">
      <div className="chat__sidebar-header">
        <div>
          <TeamOutlined />
          <span>Список диалогов</span>
        </div>
        <FormOutlined onClick={onShow} />
      </div>

      <div className="chat__sidebar-dialogs">
        <Dialogs userId={user && user._id} />
      </div>
      <Modal
        title="Создать диалог"
        visible={visible}
        onOk={onModalOk}
        onCancel={onClose}
        okText="Создать"
        cancelText="Закрыть"
        confirmLoading={isLoading}
        footer={[
          <Button key="back" onClick={onClose}>
            Закрыть
          </Button>,
          <Button disabled={!messageText} key="submit" type="primary" onClick={onModalOk}>
            Создать
          </Button>,
        ]}>
        <Form className="add-dialog-form">
          <Form.Item label="Введите имя пользователя или E-Mail">
            <Select
              placeholder="Введите имя пользователя или почту"
              value={inputValue}
              onSearch={onSearch}
              onChange={onChangeInput}
              onSelect={onSelectUser}
              notFoundContent={null}
              style={{ width: '100%' }}
              defaultActiveFirstOption={false}
              showArrow={false}
              filterOption={false}
              showSearch>
              {options}
            </Select>
          </Form.Item>

          {selectedUserId && (
            <Form.Item label="Введите текст сообщения">
              <TextArea
                autoSize={{ minRows: 3, maxRows: 10 }}
                onChange={onChangeTextArea}
                value={messageText}
              />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

Sidebar.defaultProps = {
  users: [],
};

export default Sidebar;
