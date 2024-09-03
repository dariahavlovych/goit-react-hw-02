import React from "react";

const Feedback = ({ feedbackValues, totalFeedback, positiveFeedback }) => {
  return (
    <div>
      <p>Good: {feedbackValues.good}</p>
      <p>Neutral: {feedbackValues.neutral}</p>
      <p>Bad:{feedbackValues.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
