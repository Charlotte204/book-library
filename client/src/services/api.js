export async function getAllBooks() {
  const res = await fetch('/api/books')
  if (!res.ok) throw new Error('Failed to fetch books')
  return res.json()
}

export async function getBookById(id) {
  const res = await fetch(`/api/books/${id}`)
  if (!res.ok) throw new Error('Book not found')
  return res.json()
}

export async function createBook(book) {
  const res = await fetch('/api/books', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(book),
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Failed to create book')
  }

  return res.json()
}

export async function deleteBook(id) {
  const res = await fetch(`/api/books/${id}`, {
    method: 'DELETE',
  })

  if (!res.ok) {
    const error = await res.json()
    throw new Error(error.message || 'Failed to delete book')
  }

  return res.json()
}