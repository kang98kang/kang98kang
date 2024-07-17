import type {DropResult} from 'react-beautiful-dnd'
import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from './AppState'
import type {List} from './commonTypes'
import * as LO from './listidOrders'
import * as L from './listEntities'
import * as C from './cardEntities'
import * as LC from './listidCardidOrders'
import * as U from '../utils'

export const useLists = () => {
  const dispatch = useDispatch()

  // 객체에 담긴 목록을 정렬된 배열로 변환
  // listEntities 객체에 담긴 목록을 화면에 보이게 하려면 다음처럼 listEntities의 타입 Record<UUID, List>가 아니라,
  // 정렬된 List[] 타입 배열로 바꿔줘야 한다.
  // listidOrders 상태, listEntities 상태, 색인 연산자([])를 이용해서 정렬된 목록(그릇) 배열을 계산한다.
  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )
  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({listidCardidOrders}) => listidCardidOrders
  )

  const listidOrders = useSelector<AppState, LO.State>(({listidOrders}) => listidOrders)

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid)) // listidOrders 추가
      dispatch(L.addList(list)) // listEntities 추가
      dispatch(LC.setListidCardids({listid: uuid, cardids: []})) // listidCardidOrders 추가
    },
    [dispatch]
  )

  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach(cardid => {
        dispatch(C.removeCard(cardid)) // cardEntities 삭제
      })
      dispatch(LC.removeListid(listid)) // listidCardidOrders 삭제

      dispatch(L.removeList(listid)) // listEntities 삭제
      dispatch(LO.removeListidFromOrders(listid)) // listidOrders 삭제
    },
    [dispatch, listidCardidOrders]
  )

  const onMoveList = useCallback(
    (dragIndex: number, hoverIndex: number) => {
      const newOrders = listidOrders.map((item, index) =>
        index === dragIndex
          ? listidOrders[hoverIndex]
          : index === hoverIndex
          ? listidOrders[dragIndex]
          : item
      )
      dispatch(LO.setListidOrders(newOrders)) // listidOrders 통째로 바꾸기
    },
    [dispatch, listidOrders]
  )

  const onDragEnd = useCallback(
    (result: DropResult) => {
      console.log('onDragEnd result', result)
      const destinationListid = result.destination?.droppableId
      const destinationCardIndex = result.destination?.index
      if (destinationListid === undefined || destinationCardIndex === undefined) return

      const sourceListid = result.source.droppableId
      const sourceCardIndex = result.source.index

      // 같은 리스트안에서 이동
      if (destinationListid === sourceListid) {
        const cardidOrders = listidCardidOrders[destinationListid]
        // listidCardidOrders의 cardidOrders에서 자리 바꾸기
        dispatch(
          LC.setListidCardids({
            listid: destinationListid,
            cardids: U.swapItemsInArray(
              cardidOrders,
              sourceCardIndex,
              destinationCardIndex
            )
          })
        )
      } else {
        const sourceCardidOrders = listidCardidOrders[sourceListid]
        // listidCardidOrders의 cardidOrders에서 sourceCardIndex에 위치한 cardid 삭제
        dispatch(
          LC.setListidCardids({
            listid: sourceListid,
            cardids: U.removeItemAtIndexInArray(sourceCardidOrders, sourceCardIndex)
          })
        )
        const destinationCardidOrders = listidCardidOrders[destinationListid]
        // listidCardidOrders의 cardidOrders에서 destinationCardIndex 위치에 cardid 삽입
        dispatch(
          LC.setListidCardids({
            listid: destinationListid,
            cardids: U.insertItemAtIndexInArray(
              destinationCardidOrders,
              destinationCardIndex,
              result.draggableId
            )
          })
        )
      }
    },
    [dispatch, listidCardidOrders]
  )

  return {lists, onCreateList, onRemoveList, onMoveList, onDragEnd}
}
