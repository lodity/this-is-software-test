import UserCard from './UserCard'
import { IUser } from '../types/user'
import { FC, useEffect, useState } from 'react'

interface UserListProps {
  users: IUser[]
  showSaveButton?: boolean
}

const UserList: FC<UserListProps> = ({ users, showSaveButton }) => {
  const [savedUsers, setSavedUsers] = useState<IUser[]>([])

  const handleSaveUser = (user: IUser) => {
    setSavedUsers((prev) => [...prev, user])
    localStorage.setItem('savedUsers', JSON.stringify([...savedUsers, user]))
  }

  useEffect(() => {
    const savedUsersFromStorage = localStorage.getItem('savedUsers')
    if (savedUsersFromStorage) {
      setSavedUsers(JSON.parse(savedUsersFromStorage))
    }
  }, [])

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
      {users.map((user) => (
        <UserCard
          key={user.email}
          user={user}
          onSave={showSaveButton ? handleSaveUser : undefined}
        />
      ))}
    </div>
  )
}

export default UserList
