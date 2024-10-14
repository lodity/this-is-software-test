import { useContext, useEffect, useState } from 'react'
import UserList from '../components/UserList'
import { IUser } from '../types/user'
import { UserContext } from '../context/UserContext/userContext'
import WeatherModal from '../components/WeatherModal'
import { useWeather } from '../hooks/useWeather'

const SavedUsers = () => {
  const [savedUsers, setSavedUsers] = useState<IUser[]>([])
  const userContext = useContext(UserContext)

  const { weather, weatherLoading } = useWeather()

  useEffect(() => {
    const usersFromStorage = localStorage.getItem('savedUsers')
    if (usersFromStorage) {
      setSavedUsers(JSON.parse(usersFromStorage))
    }
  }, [])

  return (
    <div>
      <h1>Saved Users</h1>
      {savedUsers.length > 0 ? (
        <UserList users={savedUsers} />
      ) : (
        <p>No users saved yet.</p>
      )}
      {userContext?.showWeather && (
        <WeatherModal weather={weather} loading={weatherLoading} />
      )}
    </div>
  )
}

export default SavedUsers
