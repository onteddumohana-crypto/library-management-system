import React from 'react';
import './BookModal.css';
import BookForm from './BookForm';

const BookModal = ({ isOpen, onClose, book, onSave }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <div className="modal-header">
                    <h2>{book ? 'Edit Book' : 'Add New Book'}</h2>
                    <button className="modal-close" onClick={onClose}>×</button>
                </div>
                <div className="modal-body">
                    <BookForm book={book} onSave={onSave} onCancel={onClose} />
                </div>
            </div>
        </div>
    );
};

export default BookModal;



