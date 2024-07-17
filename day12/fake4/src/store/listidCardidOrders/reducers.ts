import * as T from './types'

const initialState: T.State = {}

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  switch (action.type) {
    case '@listidCardids/set': // 목록uuid의 속성에 카드uuid의 배열을 추가, 계산된 속성명
      return {...state, [action.payload.listid]: action.payload.cardids}
    case '@listidCardids/remove': {
      // listidOrders에서 특정 목록(그릇)이 삭제되면 listidCardidOrders 에서도 state[삭제된_리스트_uuid] 부분을 삭제해야 한다.
      const newState = {...state} // 깊은 복사
      delete newState[action.payload] // 색인 연산자로 대상 속성 지정 후 delete
      return newState
    }
    case '@listidCardids/prependCardid': {
      const cardids = state[action.payload.listid]
      return {...state, [action.payload.listid]: [action.payload.cardid, ...cardids]}
    }
    case '@listidCardids/appendCardid': {
      // 계산된 속성명은 추가 뿐만 아니라 update도 가능하다.
      const cardids = state[action.payload.listid]
      return {...state, [action.payload.listid]: [...cardids, action.payload.cardid]}
    }
    case '@listidCardids/removeCardid': {
      const cardids = state[action.payload.listid]
      return {
        ...state,
        [action.payload.listid]: cardids.filter(id => id !== action.payload.cardid)
      }
    }
  }
  return state
}
