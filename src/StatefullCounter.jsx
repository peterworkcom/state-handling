import { useState } from "react";

const StatefullCounter = () => {
  const [counter, counterSet] = useState(0);

  const handleClick = () => {
    counterSet((prev) => prev + 1);
  };

  return (
    <div>
      <div>StatefullCounter</div>
      <div>{counter}</div>
      <button onClick={handleClick}>+</button>
    </div>
  );
};

export default StatefullCounter;
