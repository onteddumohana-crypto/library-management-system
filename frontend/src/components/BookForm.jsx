import React, { useState, useEffect } from 'react';
import './BookForm.css';

const BookForm = ({ book, onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        title: '',
        author: '',
        isbn: '',
        genre: '',
        publicationYear: '',
        publisher: '',
        quantity: 1,
        availabilityStatus: true,
        description: ''
    });

    useEffect(() => {
        if (book) {
            setFormData({
                title: book.title || '',
                author: book.author || '',
                isbn: book.isbn || '',
                genre: book.genre || '',
                publicationYear: book.publicationYear || '',
                publisher: book.publisher || '',
                quantity: book.quantity || 1,
                availabilityStatus: book.availabilityStatus !== undefined ? book.availabilityStatus : true,
                description: book.description || ''
            });
        }
    }, [book]);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : (type === 'number' ? parseInt(value) || '' : value)
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const submissionData = {
            ...formData,
            publicationYear: formData.publicationYear ? parseInt(formData.publicationYear) : null,
            quantity: formData.quantity || 1
        };
        onSave(submissionData);
    };

    return (
        <form onSubmit={handleSubmit} className="book-form">
            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="title">Title *</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="author">Author *</label>
                    <input
                        type="text"
                        id="author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="isbn">ISBN</label>
                    <input
                        type="text"
                        id="isbn"
                        name="isbn"
                        value={formData.isbn}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="genre">Genre</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        value={formData.genre}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="publicationYear">Publication Year</label>
                    <input
                        type="number"
                        id="publicationYear"
                        name="publicationYear"
                        value={formData.publicationYear}
                        onChange={handleChange}
                        min="1000"
                        max="9999"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="publisher">Publisher</label>
                    <input
                        type="text"
                        id="publisher"
                        name="publisher"
                        value={formData.publisher}
                        onChange={handleChange}
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="quantity">Quantity</label>
                    <input
                        type="number"
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        min="1"
                    />
                </div>
                <div className="form-group checkbox-group">
                    <label htmlFor="availabilityStatus">
                        <input
                            type="checkbox"
                            id="availabilityStatus"
                            name="availabilityStatus"
                            checked={formData.availabilityStatus}
                            onChange={handleChange}
                        />
                        Available
                    </label>
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows="4"
                />
            </div>

            <div className="form-actions">
                <button type="button" className="btn btn-cancel" onClick={onCancel}>
                    Cancel
                </button>
                <button type="submit" className="btn btn-save">
                    {book ? 'Update' : 'Add'} Book
                </button>
            </div>
        </form>
    );
};

export default BookForm;



