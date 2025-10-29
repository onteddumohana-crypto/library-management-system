import React, { useState } from 'react';
import './BookList.css';
import BookCard from './BookCard';

const BookList = ({ books, onEdit, onDelete }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (book.isbn && book.isbn.toLowerCase().includes(searchTerm.toLowerCase())) ||
        (book.genre && book.genre.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    return (
        <div className="book-list-container">
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search books by title, author, ISBN, or genre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="search-input"
                />
            </div>

            {filteredBooks.length === 0 ? (
                <div className="empty-state">
                    <p>{books.length === 0 ? 'No books in the library. Add your first book!' : 'No books match your search.'}</p>
                </div>
            ) : (
                <div className="books-grid">
                    {filteredBooks.map(book => (
                        <BookCard
                            key={book.id}
                            book={book}
                            onEdit={onEdit}
                            onDelete={onDelete}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export default BookList;



