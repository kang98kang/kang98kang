import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import Board from '../pages/Board'
import NoMatch from './NoMatch'

export default function RoutesSetup() {
  // prettier-ignore
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} /> {/* 색인 라우트는 자신의 컴포넌트를 부모 라우트 경로에 연결. */}
        <Route path="/board" element={<Board />} /> 
        <Route path="*" element={<NoMatch />} />
      </Route>
    </Routes>
  )
}
