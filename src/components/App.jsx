import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions'
import Section from './Section'
import Statistics from './Statistics'
import Notification  from './Notification';
import PropTypes from 'prop-types';

class App extends Component {
  state= {
    good: 0,
    neutral: 0,
    bad: 0,
  };

handleFeedback = (feedbackType) => {
  this.setState((prevState) => ({
      ...prevState,
      [feedbackType]: 
  prevState[feedbackType] + 1,
  }));
};

countTotalFeedback = () => {
  const { good, neutral, bad } = this.state;
  return good + neutral + bad;
};

countPositiveFeedbackPercentage = () => {
  const { good } = this.state;
  const total = this.countTotalFeedback();
  return total === 0 ? 0 : Math.round((good / total) * 100);
};

render () {

  const { good, neutral,  bad } = this.state;
  const total = this.countTotalFeedback();
  const positivePercentage = this.countPositiveFeedbackPercentage();

  return (
  <div style={{margin: '50px'}}>
    <Section title="Please leave feedback"> 
    <FeedbackOptions
    options={['good','neutral','bad']}
    onLeaveFeedback={this.handleFeedback}
    />
    </Section>

    <Section title={"Statistics"}>
      {total > 0 ? ( 
              <Statistics
              good = {good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage} />
      ) : (<Notification message="No feedback given" /> )}
    </Section>
  </div>
);
}}

App.propTypes = {
  options:
  PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

export default App;