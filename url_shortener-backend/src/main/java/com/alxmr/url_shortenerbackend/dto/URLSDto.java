package com.alxmr.url_shortenerbackend.dto;

import lombok.*;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor

public class URLSDto {
    private Long id;
    private String originalURL;
    private String shortURL;
    private Integer clicks;
}
