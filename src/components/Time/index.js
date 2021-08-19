import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ruLocale from 'date-fns/locale/ru';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

const Time = ({ date }) => (
  <Fragment>{formatDistanceToNow(date, { addSuffix: true, locale: ruLocale })}</Fragment>
);

Time.propTypes = {
  date: PropTypes.string,
};

export default Time;
