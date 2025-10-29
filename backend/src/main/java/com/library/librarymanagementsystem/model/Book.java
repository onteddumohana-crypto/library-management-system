package com.library.librarymanagementsystem.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "books")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Book {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    private String title;
    
    @Column(nullable = false)
    private String author;
    
    @Column(unique = true)
    private String isbn;
    
    private String genre;
    
    private Integer publicationYear;
    
    private String publisher;
    
    private Integer quantity = 1;
    
    @Column(nullable = false)
    private Boolean availabilityStatus = true;
    
    @Column(length = 1000)
    private String description;
}



