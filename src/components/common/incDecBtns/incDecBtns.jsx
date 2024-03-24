import React, { useEffect, useState } from "react";
import { Button } from "../button";

export const IncDecBtns = ({ styles, initial, getCount }) => {
  const [count, setCount] = useState(initial);
  const increment = () => {
    setCount((prev) => ++prev);
  };
  const decrement = () => {
    setCount((prev) => --prev);
  };
  useEffect(()=>{
      getCount(count)
  },[count])
  return (
    <>
      <Button
        click={decrement}
        styles={`px-[13px] text-8 py-[8px] rounded-full ${styles}`}
      >
        -
      </Button>
      <p
        className="w-[15px] text-6 font-normal bg-transparent dark:text-white"
     >{count}</p>
      <Button
        click={increment}
        styles={`px-[13px] text-7 py-[8px] rounded-full ${styles}`}
      >
        +
      </Button>
    </>
  );
};
