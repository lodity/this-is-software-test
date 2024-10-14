import { useState } from 'react'
import { ReactNode } from 'react'
import { IUser } from '../../types/user'
import { UserContext } from './userContext'

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<IUser | null>(null)
  const [showWeather, setShowWeather] = useState<boolean>(false)

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        showWeather,
        setShowWeather,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
