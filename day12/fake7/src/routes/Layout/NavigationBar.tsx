import {Link} from '../../components'

export default function NavigationBar() {
  // prettier-ignore
  return (
    <div className="flex p-4 bg-gray-200 ">
      <Link to="/Main" >Home</Link>
      {/* <Link to="/board" className="ml-4">Board</Link> */}
    </div>
  )
}
