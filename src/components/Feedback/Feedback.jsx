import { Component } from 'react';
// import PropTypes from 'prop-types';
import styles from './feedback.module.css';

class Feedback extends Component {
    state = {
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
    return (
        <div>
            <h1>Please leave feedback</h1>
            <button className= {styles.button} onClick={() =>
                this.handleFeedback('good')}>Good</button>
            <button className= {styles.button} onClick={() =>
                this.handleFeedback('neutral')}>Neutral</button>
            <button className= {styles.button} onClick={() =>
                this.handleFeedback('bad')}>Bad</button>
            <h2>Statistics</h2>
            <p>Good: {this.state.good}</p>
            <p>Neutral: {this.state.neutral}</p>
            <p>Bad: {this.state.bad}</p>
            <p>Total: {this.countTotalFeedback()}</p>
            <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
        </div>
    )
}}
export default Feedback;