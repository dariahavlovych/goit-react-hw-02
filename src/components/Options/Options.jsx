import React from "react";
import s from "./Options.module.css";

const Options = ({ onUpdate, totalFeedback, onReset }) => {
  return (
    <div>
      <button
        className={s.feedbackBtn}
        name="good"
        type="button"
        onClick={(e) => onUpdate(e.target.name)}
      >
        Good
      </button>
      <button
        className={s.feedbackBtn}
        name="neutral"
        type="button"
        onClick={(e) => onUpdate(e.target.name)}
      >
        Neutral
      </button>
      <button
        className={s.feedbackBtn}
        name="bad"
        type="button"
        onClick={(e) => onUpdate(e.target.name)}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={s.feedbackBtn} type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
