import { disconnect } from "process";
import React, { useState, useEffect } from "react";

function UseEffectApp1() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState("");

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  //이렇게 구분해서 코딩해야 성능 향상. 불필요한 로드 없앨 수 있다.
  useEffect(() => {
    console.log("랜더링");
  });

  useEffect(() => {
    console.log("count 랜더링");
  }, [count]);

  useEffect(() => {
    console.log("name 랜더링");
  }, [name]);

  useEffect(() => {
    console.log("init 랜더링");
  }, []);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  return (
    <div>
      <button onClick={handleCountUpdate}>update</button>
      <span> count: {count} </span>

      <input type="text" value={name} onChange={handleInputChange} />
      <span>name: {name}</span>
    </div>
  );
}

export default UseEffectApp1;
