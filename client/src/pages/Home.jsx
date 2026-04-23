import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

function Home() {
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/books?search=${encodeURIComponent(query.trim())}`)
    } else {
      navigate('/books')
    }
  }

  return (
    <div>
      <h1>Welcome to the Book Library</h1>
      <p>Discover and explore our collection of books.</p>

      {location.state?.message && (
        <p className="redirect-message">{location.state.message}</p>
      )}

      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  )
}

export default Home