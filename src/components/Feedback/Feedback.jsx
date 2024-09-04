import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ feedbackValues, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrapper}>
      <p>Good: {feedbackValues.good}</p>
      <p>Neutral: {feedbackValues.neutral}</p>
      <p>Bad:{feedbackValues.bad}</p>
      <p>Total: {totalFeedback}</p>
      <p>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
