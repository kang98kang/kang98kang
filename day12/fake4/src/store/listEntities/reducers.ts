import * as T from './types'

const initialState: T.State = {}
export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listEntities/add':
      return {...state, [action.payload.uuid]: action.payload} // 계산된 속성명(computed property name) 표현식으로 항목 추가
    case '@listEntities/remove': {
      const newState = {...state} // 전개 연산자를 사용하여 깊은 복사 방식으로 새로운 객체 생성
      delete newState[action.payload] // 타입스크립트에서 객체의 특정 속성을 삭제할 때는 다음처럼 특정 속성을 대상으로 delete 연산자를 사용
      return newState
    }
  }
  return state
}
