import PropTypes from 'prop-types';
import c from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
    <div className={c.feedback}>
    {options.map((option, index) => (
      <button
        key={index}
            onClick={() => onLeaveFeedback(option)}
            className={c.feedbackBtn}        
      >
        {option}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
