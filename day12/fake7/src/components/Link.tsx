import type {FC} from 'react'
import type {LinkProps as RRLinkProps} from 'react-router-dom'
import {useResolvedPath, useMatch} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'

export type LinkProps = RRLinkProps & {}
// prettier-ignore
export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
  const resolved = useResolvedPath(to)
  // console.log('resolved', resolved)
  const match = useMatch({path: resolved.pathname, end: true})
  //  console.log('match', match)
  const className = [_className, 'btn btn-link', match ? 'btn-active' : 'text-gray-800 no-underline hover:no-underline'].join(' ')
  //console.log('match', resolved.pathname, className)
  return <RRLink {...props} to={to} className={className} />
}
