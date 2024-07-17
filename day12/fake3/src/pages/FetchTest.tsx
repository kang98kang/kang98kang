import {useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title, Avatar} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import type {AppState} from '../store'
import * as F from '../store/fetchUser'

export default function FetchTest() {
  const dispatch = useDispatch()
  const {
    loading,
    errorMessage,
    fetchUser: user
  } = useSelector<AppState, AppState>(state => state)

  const getRemoteUser = useCallback(() => {
    // dispatch<any>는 type 속성이 없는 액션이라는 타입스크립트 오류를 막는 방법이다.
    // dispatch가 썽크 액션을 호출하는 것이니 당연히 type 속성이 없다.
    dispatch<any>(F.getRemoteUser()) // 썽크 액션 호출
  }, [dispatch])
  const changeName = useCallback(() => {
    dispatch<any>(F.changeNameByFetching())
  }, [dispatch])
  const changeEmail = useCallback(() => {
    dispatch(F.changeEmail(D.randomEmail()))
  }, [dispatch])
  const changePicture = useCallback(
    () => dispatch(F.changePicture({large: D.randomAvatar()})),
    [dispatch]
  )

  useEffect(getRemoteUser, [getRemoteUser])

  // prettier-ignore
  return (
    <section className="relative mt-4 ">
      <Title>FetchTest</Title>
      <div className="flex justify-center mt-4">
        <Button className="btn-sm btn-primary" onClick={getRemoteUser}>
          GET REMOTE USER
        </Button>
        <Button className="ml-4 btn-sm btn-accent" onClick={changeName}>
          CHANGE NAME
        </Button>
        <Button className="ml-4 btn-sm btn-success" onClick={changeEmail}>
          CHANGE EMAIL
        </Button>
        <Button className="ml-4 btn-sm btn-secondary" onClick={changePicture}>
          CHANGE PICTURE
        </Button>
      </div>
      {loading && (
        <div className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <Button className="btn-circle loading"></Button>
        </div>
      )}
      {/* invisible은 영역을 가지면서 안보이게 한다. 영역 없이 안보이게 하면 컴포넌트들이 재배치 되기 때문에 정신 없다. */}
      {/* p 컴포넌트에 기본문자(error:)가 존재해야 문자크기가 반영되므로 invisible 해도 영역크기의 변화가 없다. */}
      <div className={`mt-4 p-4 flex items-center justify-center bg-red-200 ${errorMessage.length ? '' : 'invisible'}`}>
        <p className="text-3xl text-red-500 text-bold">error: {errorMessage}</p>
      </div>

      <div className="flex justify-center p-4 mt-4">
        <Avatar src={user.picture.large} />
        <div className="ml-4">
          <p className="text-xl text-bold">
            {user.name.title}. {user.name.first} {user.name.last}
          </p>
          <p className="italic text-gray-600">{user.email}</p>
        </div>
      </div>
    </section>
  )
}
