import { useState, useEffect } from "react";
import { useEventListener } from "./useEventListener";

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0]);

  // useEffect 적용하기

  // useEventListner 적용하기

  return widthHeight;
};
