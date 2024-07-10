import React, { useState, useEffect } from "react";

function useSampleApp1() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [d, setD] = useState(0);
  const [e, setE] = useState(0);
  const [f, setF] = useState(0);
  const [g, setG] = useState(0);
  const [h, setH] = useState(0);

  const [result1, setResult1] = useState(0);
  const [result2, setResult2] = useState(0);
  const [result3, setResult3] = useState(0);
  const [result4, setResult4] = useState(0);

  const handleInputAChange = (e: any) => {
    setA(parseInt(e.target.value));
  };
  const handleInputBChange = (e: any) => {
    setB(parseInt(e.target.value));
  };

  const handleResult1Change = (e: any) => {
    setResult1(a + b);
  };

  const handleInputCChange = (e: any) => {
    setC(parseInt(e.target.value));
  };

  const handleInputDChange = (e: any) => {
    setD(parseInt(e.target.value));
  };

  const handleResult2Change = (e: any) => {
    setResult2(c - d);
  };

  const handleInputEChange = (e: any) => {
    setE(parseInt(e.target.value));
  };

  const handleInputFChange = (e: any) => {
    setF(parseInt(e.target.value));
  };

  const handleResult3Change = (e: any) => {
    setResult3(e * f);
  };

  const handleInputGChange = (e: any) => {
    setG(parseInt(e.target.value));
  };

  const handleInputHChange = (e: any) => {
    setH(parseInt(e.target.value));
  };

  const handleResult4Change = (e: any) => {
    setResult4(g / h);
  };

  return (
    <div>
      <input type="text" onChange={handleInputAChange} />
      <input type="text" onChange={handleInputBChange} />
      <button
        onClick={() => {
          setResult1(a + b);
        }}
      >
        +
      </button>
      <span>{result1}</span>
      <br />

      <input type="text" onChange={handleInputCChange} />
      <input type="text" onChange={handleInputDChange} />
      <button
        onClick={() => {
          setResult2(c - d);
        }}
      >
        -
      </button>
      <span>{result2}</span>
      <br />

      <input type="text" onChange={handleInputEChange} />
      <input type="text" onChange={handleInputFChange} />
      <button
        onClick={() => {
          setResult3(e * f);
        }}
      >
        *
      </button>
      <span>{result3}</span>
      <br />

      <input type="text" onChange={handleInputGChange} />
      <input type="text" onChange={handleInputHChange} />
      <button
        onClick={() => {
          setResult4(g / h);
        }}
      >
        /
      </button>
      <span>{result4}</span>
      <br />
    </div>
  );
}

export default useSampleApp1;
