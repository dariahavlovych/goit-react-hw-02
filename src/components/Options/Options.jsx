import React from "react";

const Options = ({ onUpdate, totalFeedback, onReset }) => {
  return (
    <div>
      <button
        name="good"
        type="button"
        onClick={(e) => onUpdate(e.target.name)}
      >
        Good
      </button>
      <button
        name="neutral"
        type="button"
        onClick={(e) => onUpdate(e.target.name)}
      >
        Neutral
      </button>
      <button name="bad" type="button" onClick={(e) => onUpdate(e.target.name)}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
