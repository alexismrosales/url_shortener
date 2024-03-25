package com.alxmr.url_shortenerbackend.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity

@Table(name = "URLS")
public class URLS {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(columnDefinition = "TEXT", name = "original_URL")
    private String originalURL;
    @Column(columnDefinition = "TEXT", name = "short_URL")
    private String shortURL;
    @Column(name = "Clicks")
    private Short clicks;
}
