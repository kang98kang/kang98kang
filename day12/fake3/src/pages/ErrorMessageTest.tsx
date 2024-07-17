import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import * as E from '../store/errorMessage'

export default function ErrorMessageTest() {
  const dispatch = useDispatch()
  const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)

  const generateErrorMessage = useCallback(() => {
    // dispatch<any>는 type 속성이 없는 액션이라는 타입스크립트 오류를 막는 방법이다.
    // dispatch가 썽크 액션을 호출하는 것이니 당연히 type 속성이 없다.
    dispatch<any>(E.generateErrorMessage(D.randomSentence())) // 썽크 액션 호출
  }, [dispatch])

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ErrorMessageTest</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button className="btn-sm btn-primary" onClick={generateErrorMessage}>
            GENERATE ERROR MESSAGE
          </Button>
        </div>
        {/* invisible은 영역을 가지면서 안보이게 한다. 영역 없이 안보이게 하면 컴포넌트들이 재배치 되기 때문에 정신 없다. */}
        {/* p 컴포넌트에 기본문자(error:)가 존재해야 문자크기가 반영되므로 invisible 해도 영역크기의 변화가 없다. */}
        <div className={`mt-4 p-4 flex items-center justify-center bg-red-200 ${errorMessage.length ? '' : 'invisible'}`}>
          <p className="text-2xl text-red-600 text-bold">error: {errorMessage}</p>
        </div>
      </div>
    </section>
  )
}
