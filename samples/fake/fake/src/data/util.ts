//난수 제작 페이지. (사진의 가로 세로 크기 랜덤하게 뽑기 위해)

/*javascript
function makeArray(length) {
  return new Array(length).fill(null);
}

// typescript
function makeArray2(length: number): Array<any> {
  return new Array(length).fill(null);
}

// 함수 선언형
const makeArray3 = function(length: number): Array<any> {
  return new Array(length).fill(null);
};

// 화살표 함수
const makeArray4 = (length: number): Array<any> => {
  return new Array(length).fill(null);
}

// 화살표 함수 축약
export const makeArray5 = (length: number) => new Array(length).fill(null);
*/

//[length만큼 null(undefined)로 채워짐]
export const makeArray = (length: number) => new Array(length).fill(null);

//[length = max - min 만큼 null로 채워진 배열에 map으로 값 채워넣기.]
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((notUsed, index) => index + min);

export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min)) + min;
