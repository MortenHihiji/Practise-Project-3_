import React from 'react';
import PropTypes from 'prop-types';
import readedSvg from 'assets/img/readed.svg';
import noReadedSvg from 'assets/img/noreaded.svg';

const IconReaded = ({ isReaded, isMe }) => {
  if (!isMe) {
    return null;
  }

  return isReaded ? (
    <img className="message__icon-readed" src={readedSvg} alt="Readed icon" />
  ) : (
    <img
      className="message__icon-readed message__icon-readed--no"
      src={noReadedSvg}
      alt="Not readed icon"
    />
  );
};

IconReaded.propTypes = {
  isMe: PropTypes.bool,
  isReaded: PropTypes.bool,
};

export default IconReaded;
