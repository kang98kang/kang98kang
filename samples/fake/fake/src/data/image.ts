import * as U from "./util";

export const picsumUrl = (width: number, height: number): string =>
  `https://picsum.photos/${width}/${height}`;

//util.ts 에서 random 함수 불러와서 width: 1000~1200 height: 800~1000 사이 랜덤한 사진 추출
export const randomImages = (
  w: number = 1000,
  h: number = 800,
  delta: number = 200
): string => picsumUrl(U.random(w, w + delta), U.random(h, h + delta));

export const randomAvatar = () => {
  const size = U.random(200, 400);
  return picsumUrl(size, size);
};
