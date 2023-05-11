import React, { useState } from "react";
import Section from "./Section/Section";
import Statistics from "components/Statistics/Statistics";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Notification from "./Notification/Notification";

export default function App () {
  const [good, setGood] = useState (0);
  const [neutral, setNeutral] = useState (0);
  const [bad, setBad] = useState (0); 

const feedbackOptions = ['good', 'neutral', 'bad'];

const handlerOption = e => {
  const option = e.currentTarget.textContent; 

  switch (option) {
    case 'good':
      setGood(state => state + 1);
      break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
        case 'bad':
          setBad(state => state + 1);
          break;
          default:
          return;
  };
};

// useEffect(() => {
//   const countTotalFeedback = good + neutral + bad;
//   const countPositiveFeedbackPercentage = Math.round(good*100/countTotalFeedback);
// }, [good, neutral, bad]);

    return <div>
      <Section title='Please leave feedback'>
            <FeedbackOptions
            options={feedbackOptions} 
            onLeaveFeedback={handlerOption}
            /> 
      </Section>
      <Section title='Statistics'>
        {
          (good + neutral + bad) !== 0 ? (
            <Statistics 
            good={good} 
            neutral={neutral} 
            bad={bad} 
            total={good + neutral + bad} 
            positivePercentage={Math.round(good*100/(good + neutral + bad))}
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



