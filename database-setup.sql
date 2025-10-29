-- Database Setup Script for Library Management System
-- Run this script in PostgreSQL to create the database
-- Execute: psql -U postgres -f database-setup.sql

-- Create database if it doesn't exist
SELECT 'CREATE DATABASE library_db'
WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = 'library_db')\gexec

-- Note: Spring Boot will automatically create all tables when you start the application
-- The application uses Hibernate's ddl-auto=update feature



