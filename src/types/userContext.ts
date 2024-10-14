import { IUser } from './user'

export interface IUserContext {
  user: IUser | null
  setUser: (user: IUser) => void
  showWeather: boolean
  setShowWeather: (showWeather: boolean) => void
}
