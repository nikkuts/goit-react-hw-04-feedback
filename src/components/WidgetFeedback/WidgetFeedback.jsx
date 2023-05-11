// import React, { Component } from "react";
// import Statistics from "components/Statistics/Statistics";

// class WidgetFeedback extends Component {
    
//     state = {
//         good: 0,
//         neutral: 0,
//         bad: 0,
//       }

//     handlerGood = () => {
//         this.setState(prevState => ({
//             good: prevState.good + 1
//         }));
//     };

//     handlerNeutral = () => {
//         this.setState(prevState => ({
//             neutral: prevState.neutral + 1,
//         }));
//     };

//     handlerBad = () => {
//         this.setState(prevState => ({
//             bad: prevState.bad + 1,
//         }));
//     };
    
//     countTotalFeedback = () => this.state.good + this.state.neutral + this.state.bad;

//     countPositiveFeedbackPercentage = () => Math.round(this.state.good*100/(this.state.good + this.state.neutral + this.state.bad));

//     render () {
//         const {good, neutral, bad} = this.state;

//         return <div>
//             <h1>Please leave feedback</h1>
//                 <ul>
//                     <button type="button" onClick={this.handlerGood}>Good</button>
//                     <button type="button" onClick={this.handlerNeutral}>Neutral</button>
//                     <button type="button" onClick={this.handlerBad}>Bad</button>
//                 </ul>
//             <h2>Statistics</h2>
//             <>
//                 <Statistics 
//                 good={good} 
//                 neutral={neutral} 
//                 bad={bad} 
//                 total={this.countTotalFeedback()} 
//                 positivePercentage={this.countPositiveFeedbackPercentage()}
//                 />
//             </>
//         </div>
//     }
// }

// export default WidgetFeedback;