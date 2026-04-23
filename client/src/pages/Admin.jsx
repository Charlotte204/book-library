import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Admin() {
  const { isLoggedIn } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/', {
        replace: true,
        state: { message: 'Access denied. Please log in first.' },
      })
    }
  }, [isLoggedIn, navigate])

  if (!isLoggedIn) return null

  return (
    <div>
      <h1>Admin Page</h1>
      <p>Only logged-in users can access this page.</p>
    </div>
  )
}

export default Admin