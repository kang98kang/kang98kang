import type {ICard} from '../data'

export type UUID = string
export type List = {
  uuid: UUID
  title: string
}

export type Card = ICard
// listid(그릇)가 있어야 카드 추가, 삭제 또는 이동시 접근이 쉽다.
// card 추가(prepend, append), 삭제(remove)하는 액션 입력매개변수로 사용된다.
export type CardidListid = {
  cardid: UUID
  listid: UUID
}
export type ListidCardid = CardidListid
export type ListidCardidS = {listid: UUID; cardids: UUID[]}
export type CardidListidIndex = CardidListid & {
  index: number
}
