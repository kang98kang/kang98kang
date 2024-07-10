import React, { useEffect } from "react";

const Timer = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("타이머 동작 중");
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("타이머 정지");
    };
  });

  return (
    <div>
      <span>타이머를 시작합니다.</span>
    </div>
  );
};

export default Timer;
