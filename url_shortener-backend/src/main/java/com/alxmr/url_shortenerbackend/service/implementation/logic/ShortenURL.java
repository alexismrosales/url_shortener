package com.alxmr.url_shortenerbackend.service.implementation.logic;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.repository.URLSRepository;
import com.google.common.hash.Hashing;
import java.nio.charset.StandardCharsets;

public class ShortenURL {
    private final URLSRepository urlsRepository;
    private final String ogURL;

    public ShortenURL(URLSRepository urlsRepository, URLSDto urlsDto) {
        this.urlsRepository = urlsRepository;
        this.ogURL = urlsDto.getOriginalURL();
    }

    // ShortenURL : Main function to convert the original URL to short URL
    public String toShort(String back_half) {
        Integer increase = 5;
        String short_url, original_url = ogURL;
        if(back_half.isEmpty())
        {
            do{
                short_url = toHash(original_url,increase);
                increase++;
            }
            while(urlExist(original_url));
        }
        else
        {
            short_url = "/" + back_half;
        }
        return short_url;
    }

    private String toHash(String url, Integer size) {
        String sha256 = Hashing.sha256().hashString(url, StandardCharsets.UTF_8).toString();
        return sha256.substring(0,size);
    }
    public Boolean urlExist(String url)
    {
        return urlsRepository.existsByOriginalURL(url);
    }
}
