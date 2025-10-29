import { useState, useEffect } from 'react';
import './App.css';
import BookList from './components/BookList';
import BookModal from './components/BookModal';
import bookService from './api/bookService';

function App() {
  const [books, setBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      const response = await bookService.getAllBooks();
      setBooks(response.data);
      setError(null);
    } catch (err) {
      setError('Failed to load books. Make sure the backend is running.');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleAddBook = () => {
    setEditingBook(null);
    setIsModalOpen(true);
  };

  const handleEditBook = (book) => {
    setEditingBook(book);
    setIsModalOpen(true);
  };

  const handleSaveBook = async (bookData) => {
    try {
      if (editingBook) {
        await bookService.updateBook(editingBook.id, bookData);
      } else {
        await bookService.createBook(bookData);
      }
      setIsModalOpen(false);
      setEditingBook(null);
      fetchBooks();
    } catch (err) {
      alert('Failed to save book. Please try again.');
      console.error('Error saving book:', err);
    }
  };

  const handleDeleteBook = async (id) => {
    if (window.confirm('Are you sure you want to delete this book?')) {
      try {
        await bookService.deleteBook(id);
        fetchBooks();
      } catch (err) {
        alert('Failed to delete book. Please try again.');
        console.error('Error deleting book:', err);
      }
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingBook(null);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>📚 Library Management System</h1>
        <button className="btn-add" onClick={handleAddBook}>
          + Add New Book
        </button>
      </header>

      <main className="app-main">
        {error && (
          <div className="error-message">
            {error}
          </div>
        )}

        {loading ? (
          <div className="loading">Loading books...</div>
        ) : (
          <BookList
            books={books}
            onEdit={handleEditBook}
            onDelete={handleDeleteBook}
          />
        )}
      </main>

      <BookModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        book={editingBook}
        onSave={handleSaveBook}
      />
    </div>
  );
}

export default App;
