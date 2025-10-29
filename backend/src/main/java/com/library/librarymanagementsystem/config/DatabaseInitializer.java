package com.library.librarymanagementsystem.config;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.Statement;

@Component
public class DatabaseInitializer implements CommandLineRunner {

    @Value("${spring.datasource.url}")
    private String datasourceUrl;
    
    @Value("${spring.datasource.username}")
    private String username;
    
    @Value("${spring.datasource.password}")
    private String password;

    @Override
    public void run(String... args) {
        try {
            // Extract database name from URL (e.g., jdbc:postgresql://localhost:5432/library_db)
            String dbName = datasourceUrl.substring(datasourceUrl.lastIndexOf("/") + 1);
            
            // Connect to default 'postgres' database to create our database if needed
            String defaultUrl = datasourceUrl.substring(0, datasourceUrl.lastIndexOf("/")) + "/postgres";
            
            try (Connection conn = DriverManager.getConnection(defaultUrl, username, password)) {
                // Disable auto-commit for CREATE DATABASE command
                conn.setAutoCommit(true);
                
                try (Statement stmt = conn.createStatement()) {
                    // Check if database exists
                    String checkDbQuery = "SELECT 1 FROM pg_database WHERE datname='" + dbName + "'";
                    var resultSet = stmt.executeQuery(checkDbQuery);
                    
                    if (!resultSet.next()) {
                        // Database doesn't exist, create it
                        // Note: CREATE DATABASE cannot be executed in a transaction
                        try {
                            stmt.executeUpdate("CREATE DATABASE " + dbName);
                            System.out.println("✓ Database '" + dbName + "' created successfully!");
                        } catch (Exception e) {
                            // Database might already exist or user might not have permission
                            System.out.println("⚠ Database creation skipped: " + e.getMessage());
                        }
                    } else {
                        System.out.println("✓ Database '" + dbName + "' already exists.");
                    }
                }
            }
        } catch (Exception e) {
            // If we can't auto-create, that's okay - user may need to create it manually
            System.out.println("Note: Could not auto-create database. Please ensure '" + 
                datasourceUrl.substring(datasourceUrl.lastIndexOf("/") + 1) + 
                "' database exists. Error: " + e.getMessage());
        }
    }
}

