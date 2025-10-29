# Library Management System

A full-stack library management application built with modern web technologies, offering complete CRUD operations for effective library administration.

## Overview

This Library Management System is designed to simplify library workflows. It allows librarians and administrators to efficiently manage the library's book catalog through a user-friendly web interface.

## Tech Stack

### Frontend
- **ReactJS** (v19.1.1) with Vite
- **Axios** (v1.13.0) for API communication
- Modern CSS for styling
- ESLint for code quality

### Backend
- **Java 17**
- **Spring Boot 3.2.0**
- **Spring Data JPA**
- **Lombok** for reducing boilerplate code
- **Spring Boot DevTools** for development

### Database
- **PostgreSQL**

## Features

### Core Functionality
- **Book Management**
  - ✅ Add new books to the library catalog
  - ✅ View comprehensive details of all books
  - ✅ Update book information including availability status
  - ✅ Delete books from the system
  - ✅ Search functionality to filter books by title, author, ISBN, or genre
  - ✅ Beautiful and responsive UI with modern design

### Book Details Tracked
- Title (required)
- Author (required)
- ISBN
- Genre
- Publication Year
- Publisher
- Quantity
- Availability Status
- Description

## Project Structure

```
library-management-system/
├── backend/                    # Spring Boot Backend
│   ├── src/main/java/com/library/librarymanagementsystem/
│   │   ├── config/            # Database configuration
│   │   ├── controller/        # REST API controllers
│   │   ├── model/            # JPA entities
│   │   ├── repository/       # Data access layer
│   │   └── service/          # Business logic layer
│   ├── src/main/resources/
│   │   ├── application.properties
│   │   └── data.sql
│   └── pom.xml
├── frontend/                   # React Frontend
│   ├── src/
│   │   ├── api/              # API service layer
│   │   ├── components/       # React components
│   │   └── assets/           # Static assets
│   ├── package.json
│   └── vite.config.js
└── database-setup.sql         # Database initialization script
```

## Prerequisites

Before running the application, ensure you have the following installed:

- **Java 17** or higher
- **Node.js** (v16 or higher)
- **PostgreSQL** (v12 or higher)
- **Maven** (for backend)
- **npm** or **yarn** (for frontend)

## Installation & Setup

### 1. Database Setup

1. Install PostgreSQL and start the service
2. Create the database:
   ```bash
   psql -U postgres -f database-setup.sql
   ```
3. Update database credentials in `backend/src/main/resources/application.properties` if needed

### 2. Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd backend
   ```

2. Install dependencies and run the application:
   ```bash
   mvn clean install
   mvn spring-boot:run
   ```

   The backend will start on `http://localhost:8080`

### 3. Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

   The frontend will start on `http://localhost:5173`

## API Endpoints

The backend provides the following REST API endpoints:

- `GET /api/books` - Get all books
- `GET /api/books/{id}` - Get book by ID
- `POST /api/books` - Create a new book
- `PUT /api/books/{id}` - Update a book
- `DELETE /api/books/{id}` - Delete a book
- `GET /api/books/search?query={searchTerm}` - Search books

## Configuration

### Backend Configuration
Update `backend/src/main/resources/application.properties`:

```properties
# Database Configuration
spring.datasource.url=jdbc:postgresql://localhost:5432/library_db
spring.datasource.username=your_username
spring.datasource.password=your_password

# Server Configuration
server.port=8080
```

### Frontend Configuration
The frontend is configured to connect to the backend API at `http://localhost:8080`. Update the API base URL in `frontend/src/api/bookService.js` if needed.

## Development

### Backend Development
- The application uses Spring Boot DevTools for hot reloading
- Database schema is automatically updated using Hibernate's `ddl-auto=update`
- SQL queries are logged in the console for debugging

### Frontend Development
- Uses Vite for fast development and hot module replacement
- ESLint is configured for code quality
- Modern React with hooks and functional components

## Building for Production

### Backend
```bash
cd backend
mvn clean package
java -jar target/library-management-system-1.0.0.jar
```

### Frontend
```bash
cd frontend
npm run build
```

The built files will be in the `dist` directory.

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For support and questions, please open an issue in the repository or contact the development team.

---

**Happy Library Managing! 📚**

