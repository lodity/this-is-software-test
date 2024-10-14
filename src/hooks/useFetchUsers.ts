import { useEffect, useState } from 'react'
import axios from 'axios'
import { IUser } from '../types/user'

export const useFetchUsers = (count: number, isFetchCount: number) => {
  const [users, setUsers] = useState<IUser[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      try {
        const response = await axios.get(
          `https://randomuser.me/api/?results=${count}`,
        )
        setUsers((prevUsers) => [...prevUsers, ...response.data.results])
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [count, isFetchCount])

  return { users, loading }
}
