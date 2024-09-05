import { SyntheticEvent, useState } from "react";

type EventCallback = (event: SyntheticEvent) => void;

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increaseCount: EventCallback = () => {
    setCount(count + 1);
  };

  return (
    <div className="counter">
      The count is: {count}
      <button onClick={increaseCount}>+1</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default Counter;
