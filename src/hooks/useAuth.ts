import { useContext } from 'react'
import { AuthContext } from '../components/core/AuthProvider'

export const useAuth = () => useContext(AuthContext)
