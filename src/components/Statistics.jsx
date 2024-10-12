import React from "react";
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
      <div>
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {total}</p>
        <p>Positive Feedback: {positivePercentage}%</p>
     </div>
    );
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,  // good trebuie să fie un număr
    neutral: PropTypes.number.isRequired,  // neutral trebuie să fie un număr
    bad: PropTypes.number.isRequired,  // bad trebuie să fie un număr
    total: PropTypes.number.isRequired,  // total trebuie să fie un număr
    positivePercentage: PropTypes.number.isRequired,  // positivePercentage trebuie să fie un număr
};

export default Statistics;