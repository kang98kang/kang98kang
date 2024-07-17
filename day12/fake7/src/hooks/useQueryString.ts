/*
  https://velog.io/@jce1407/유용한-URL-Hooks
  npm i query-string 
*/
import {useLocation} from 'react-router-dom'
import queryString from 'query-string'

const useQueryString = () => {
  const {search} = useLocation()
  const query = queryString.parse(search)

  return query
}

export default useQueryString
