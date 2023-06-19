import PropTypes from 'prop-types';
import c from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <ul className={c.feedbackList}>
    <li className={c.feedbackListItem}>Good: {good}</li>
    <li className={c.feedbackListItem}>Neutral: {neutral}</li>
    <li className={c.feedbackListItem}>Bad: {bad}</li>
    <li className={c.feedbackListItem}>Total: {total}</li>
    <li className={c.feedbackListPercent}>
      Positive feedback: {positivePercentage}%
    </li>
  </ul>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
