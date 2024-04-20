import { useState, useEffect, useMemo } from "react";

const UseMemoComp = () => {
  const [count, setCount] = useState(33);
  const [left, setLeft] = useState(0);

  const expensiveMathOp = (n) => {
    if (n <= 1) {
      return 1;
    }
    return expensiveMathOp(n - 1) + expensiveMathOp(n - 2);
  };

  /*   Calling this functional directly may pose performance issues, especially as the count 
    increases, potentially impacting the animation functionality above. Therefore, 
    optimization is necessary in this area. */
  //   const value = expensiveMathOp(count);

  //   Utilizing useMemo hook to cache the expensive calculations of value
  const value = useMemo(() => expensiveMathOp(count), [count]);

  useEffect(() => {
    requestAnimationFrame(animate);
    function animate() {
      setLeft(left + 1);
    }
  }, [left]);

  return (
    <div>
      <p>Animating a ball using simple JavaScript Math.sign method</p>
      <div
        style={{ left: `${Math.sin(left * 0.1) * 100 + 100}px` }}
        className="ball"
      ></div>
      <br />
      <hr />
      <br />
      <p>
        The current rendering approach may pose performance issues, especially
        as the count increases, potentially impacting the animation
        functionality above. Therefore, optimization is necessary in this area.
      </p>
      <h2>
        Count: {count} <button onClick={() => setCount(count + 1)}>+</button>
      </h2>
      <h3>Utilizing useMemo hook to cache the expensive calculations</h3>
      <p>
        The given value of a computationally intensive mathematical operation,
        handled by a function wrapped within useMemo. This caching mechanism
        helps avoid redundant computations, thereby optimizing rendering speed.
      </p>
      <h2>Value: : {value}</h2>
    </div>
  );
};

export default UseMemoComp;
