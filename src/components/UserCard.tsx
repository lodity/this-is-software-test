import { FC, useContext } from 'react'
import { UserContext } from '../context/UserContext/userContext'
import { IUser } from '../types/user'

interface UserCardProps {
  user: IUser
  onSave?: (user: IUser) => void
}

const UserCard: FC<UserCardProps> = ({ user, onSave }) => {
  const userContext = useContext(UserContext)

  function onShowWeather() {
    if (userContext) {
      const { setUser, setShowWeather } = userContext
      setUser(user)
      setShowWeather(true)
    }
  }

  return (
    <div className='flex flex-col p-4 border rounded-lg shadow-md'>
      <img
        src={user.picture.large}
        alt={`${user.name.first} ${user.name.last}`}
        width={128}
        height={128}
      />
      <h2>{`${user.name.first} ${user.name.last}`}</h2>
      <p>{`Gender: ${user.gender}`}</p>
      <p>{`Location: ${user.location.city}, ${user.location.country}`}</p>
      <p>{`Email: ${user.email}`}</p>
      <div className='flex gap-2'>
        {onSave && (
          <button
            onClick={() => onSave(user)}
            className='bg-blue-500 text-white p-2 rounded'
          >
            Save
          </button>
        )}
        <button
          onClick={onShowWeather}
          className='bg-green-500 text-white p-2 rounded'
        >
          Weather
        </button>
      </div>
    </div>
  )
}

export default UserCard
