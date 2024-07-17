import * as L from './loading'
import * as E from './errorMessage'
import * as F from './fetchUser'

/*export type IRandomUser = {
  email: string
  name: {title: string; first: string; last: string}
  picture: {large: string}
}*/
export type AppState = {
  loading: L.State // boolean
  errorMessage: E.State // string
  fetchUser: F.State // D.IRandomUser
}
