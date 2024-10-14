import { createContext } from 'react'
import { IUserContext } from '../../types/userContext'

export const UserContext = createContext<IUserContext | undefined>(undefined)
