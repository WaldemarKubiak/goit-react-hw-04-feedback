import PropTypes from 'prop-types';
import c from './Notification.module.css';

export const Notification = ({ message }) => (
  <p className={c.message}>{message}</p>
);

Notification.protoTypes = {
  message: PropTypes.string.isRequired,
};
