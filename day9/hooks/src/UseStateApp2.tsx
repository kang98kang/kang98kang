import { useState } from "react";

const heavyWork = () => {
  console.log("heavy work");
  return ["홍길동", "김민수"];
};

function UseStateApp2() {
  const [names, setNames] = useState(() => heavyWork());
  const [input, setInput] = useState("");

  const handleInputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleUpload = () => {
    setNames((prevState) => {
      console.log("이전 state", prevState);
      return [input, ...prevState];
    });
  };

  console.log(input);

  return (
    <div>
      <input type="text" value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>upload</button>
      {names.map((name, idx) => {
        return <p key={idx}>{name}</p>;
      })}
    </div>
  );
}

export default UseStateApp2;
