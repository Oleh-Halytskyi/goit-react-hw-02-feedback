import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Box } from './Box';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './GetFeedback/FeedbackOptions';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export class App extends Component {
  static defaultProps = {
    titleFeedback: 'Please leave feedback',
    titleStatistics: 'Statistics',
    message: 'There is no feedback',
  };

  static propTypes = {
    titleFeedback: PropTypes.string,
    titleStatistics: PropTypes.string,
    message: PropTypes.string,
  };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  incrementGood = () => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };
  incrementNeutral = () => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };
  incrementBad = () => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    const result = this.state.good + this.state.neutral + this.state.bad;
    return result;
  };

  countPositiveFeedbackPercentage = () => {
    const result = (this.state.good / this.countTotalFeedback()) * 100;
    return result;
  };

  render() {
    return (
      <Box as="main" p="20px">
        <Section titleFeedback={this.props.titleFeedback}>
          <FeedbackOptions
            incrementGood={this.incrementGood}
            incrementNeutral={this.incrementNeutral}
            incrementBad={this.incrementBad}
          />
        </Section>

        <Section titleStatistics={this.props.titleStatistics}>
          {this.state.good || this.state.neutral || this.state.bad > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              countTotalFeedback={this.countTotalFeedback()}
              countPositiveFeedbackPercentage={Math.round(
                this.countPositiveFeedbackPercentage()
              )}
            />
          ) : (
            <Notification message={this.props.message} />
          )}
        </Section>
      </Box>
    );
  }
}
