import { useContext, useState } from 'react'
import UserList from '../components/UserList'
import { useFetchUsers } from '../hooks/useFetchUsers'
import WeatherModal from '../components/WeatherModal'
import { UserContext } from '../context/UserContext/userContext'
import { useWeather } from '../hooks/useWeather'

const Home = () => {
  const userContext = useContext(UserContext)
  const [fetchNewUsersCount, setFetchNewUsersCount] = useState<number>(0)

  const { users, loading: usersLoading } = useFetchUsers(10, fetchNewUsersCount)
  const { weather, weatherLoading } = useWeather()

  const handleLoadMore = () => {
    setFetchNewUsersCount((prevPage) => prevPage + 1)
  }

  return (
    <div>
      <h1>Random Users</h1>
      <UserList users={users} showSaveButton={true} />
      {usersLoading && <p>Loading...</p>}
      {userContext?.showWeather && (
        <WeatherModal weather={weather} loading={weatherLoading} />
      )}
      <button
        className='bg-blue-500 text-white p-2 rounded'
        onClick={handleLoadMore}
      >
        Load More Users
      </button>
    </div>
  )
}

export default Home
