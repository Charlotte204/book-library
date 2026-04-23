{/* AddBook form — Lab 12 update */}
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { createBook } from '../services/api'

function AddBook() {
  const navigate = useNavigate()

  const [form, setForm] = useState({
    title: '',
    author: '',
    genre: '',
    year: '',
    description: ''
  })

  const [error, setError] = useState(null)
  const [saving, setSaving] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSaving(true)
    setError(null)

    try {
      await createBook({ ...form, year: Number(form.year) })
      navigate('/books')
    } catch (err) {
      setError(err.message)
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="add-book">
      <h1>Add a New Book</h1>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '500px'
        }}
      >
        <input
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          required
        />

        <input
          name="author"
          placeholder="Author"
          value={form.author}
          onChange={handleChange}
          required
        />

        <input
          name="genre"
          placeholder="Genre"
          value={form.genre}
          onChange={handleChange}
          required
        />

        <input
          name="year"
          type="number"
          placeholder="Year"
          value={form.year}
          onChange={handleChange}
          required
        />

        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          rows={4}
        />

        <button type="submit" disabled={saving}>
          {saving ? 'Saving...' : 'Add Book'}
        </button>
      </form>
    </div>
  )
}

export default AddBook
{/* AddBook form — Lab 12 update */}