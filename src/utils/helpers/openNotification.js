import { notification } from 'antd';

const openNotificationWithIcon = ({ text, type = 'info', title, duration = 3 }) => {
  notification[type]({
    message: title,
    description: text,
    duration: duration,
  });
};

export default openNotificationWithIcon;
