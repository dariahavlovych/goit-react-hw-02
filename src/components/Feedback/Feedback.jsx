import React from "react";
import s from "./Feedback.module.css";

const Feedback = ({ feedbackValues, totalFeedback, positiveFeedback }) => {
  return (
    <div className={s.wrapper}>
      <p className={s.type}>Good: {feedbackValues.good}</p>
      <p className={s.type}>Neutral: {feedbackValues.neutral}</p>
      <p className={s.type}>Bad: {feedbackValues.bad}</p>
      <p className={s.type}>Total: {totalFeedback}</p>
      <p className={s.type}>Positive: {positiveFeedback}%</p>
    </div>
  );
};

export default Feedback;
