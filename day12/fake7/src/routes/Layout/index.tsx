import {Outlet} from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Footer from './Footer'

export default function Layout() {
  return (
    <>
      <NavigationBar /> {/*공통 컴포넌트 */}
      <Outlet /> {/* Layout 컴포넌트의 자식들이 여기에 위치 */}
      <Footer /> {/*공통 컴포넌트 */}
    </>
  )
}
