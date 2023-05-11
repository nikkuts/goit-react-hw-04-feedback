import React, { Component } from "react";
import Section from "./Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

feedbackOptions = Object.keys(this.state);

handlerOption = e => {
  const option = e.currentTarget.textContent;
  this.setState(prevState => ({
    [option]: prevState[option] + 1
}));
};

countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

countPositiveFeedbackPercentage = () => Math.round(this.state.good*100/(this.state.good + this.state.neutral + this.state.bad));

render () {
    const {good, neutral, bad} = this.state;

    return <div>
      <Section title='Please leave feedback'>
            <FeedbackOptions
            options={this.feedbackOptions} 
            onLeaveFeedback={this.handlerOption}
            /> 
      </Section>
      <Section title='Statistics'>
        {
          this.countTotalFeedback() !== 0 ? (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={this.countTotalFeedback()} 
            positivePercentage={this.countPositiveFeedbackPercentage()}
            /> 
          ) : (
            <Notification
            message='There is no feedback'
            /> 
          )
        }   
      </Section>
    </div>
};
};

export default App;
