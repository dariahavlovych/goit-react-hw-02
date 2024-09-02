import React from "react";

const Options = (storage) => {
  return (
    <div>
      <button type="button">Good</button>
      <button type="button">Neutral</button>
      <button type="button">Bad</button>
      {storage && <button type="button">Reset</button>}
    </div>
  );
};

export default Options;
