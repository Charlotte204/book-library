import { NavLink } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { isLoggedIn, toggleLogin } = useAuth()

  return (
    <nav className="navbar">
      <span className="nav-brand">📚 Book Library</span>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/books">Books</NavLink>
        <NavLink to="/admin">Admin</NavLink>
<NavLink to="/books/add">Add Book</NavLink>
        <button className="login-btn" onClick={toggleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </div>
    </nav>
  )
}

export default Navbar