import React from 'react';
import './BookCard.css';

const BookCard = ({ book, onEdit, onDelete }) => {
    return (
        <div className="book-card">
            <div className="book-card-header">
                <h3 className="book-title">{book.title}</h3>
                <span className={`status-badge ${book.availabilityStatus ? 'available' : 'unavailable'}`}>
                    {book.availabilityStatus ? 'Available' : 'Unavailable'}
                </span>
            </div>
            <div className="book-card-body">
                <p className="book-author"><strong>Author:</strong> {book.author}</p>
                {book.isbn && <p className="book-isbn"><strong>ISBN:</strong> {book.isbn}</p>}
                {book.genre && <p className="book-genre"><strong>Genre:</strong> {book.genre}</p>}
                {book.publicationYear && <p className="book-year"><strong>Year:</strong> {book.publicationYear}</p>}
                {book.publisher && <p className="book-publisher"><strong>Publisher:</strong> {book.publisher}</p>}
                <p className="book-quantity"><strong>Quantity:</strong> {book.quantity}</p>
                {book.description && (
                    <p className="book-description"><strong>Description:</strong> {book.description}</p>
                )}
            </div>
            <div className="book-card-actions">
                <button className="btn btn-edit" onClick={() => onEdit(book)}>
                    Edit
                </button>
                <button className="btn btn-delete" onClick={() => onDelete(book.id)}>
                    Delete
                </button>
            </div>
        </div>
    );
};

export default BookCard;



