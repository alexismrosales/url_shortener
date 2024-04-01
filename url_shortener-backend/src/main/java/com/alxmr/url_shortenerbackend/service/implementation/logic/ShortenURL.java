package com.alxmr.url_shortenerbackend.service.implementation.logic;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.entity.URLS;
import com.alxmr.url_shortenerbackend.repository.URLSRepository;
import com.google.common.hash.Hashing;
import java.nio.charset.StandardCharsets;

public class ShortenURL {
    private final URLSRepository urlsRepository;
    private final String ogURL;
    private Boolean hasNoBack_Half = false;

    public ShortenURL(URLSRepository urlsRepository, URLSDto urlsDto) {
        this.urlsRepository = urlsRepository;
        this.ogURL = urlsDto.getOriginalURL();
    }

    // ShortenURL : Main function to convert the original URL to short URL
    public String toShort(String back_half) {
        Integer increase = 5;
        String short_url;

        if(back_half.isEmpty()) {
            if(verifyIfUrlExists()){
                hasNoBack_Half = true;
                return  getIfUrlIfExists().getShortURL();
            }
            do {
                short_url = toHash(ogURL, increase);
                increase++;
            }
            while (surlExist(short_url));
        }
        else
            short_url = back_half;
        return short_url;
    }
    // Check if is not duplicate without no backhalf
    public boolean Duplicate()
    {
        return hasNoBack_Half;
    }
    // Check if the url exists in the repository
    public boolean verifyIfUrlExists(){
        return urlExists(ogURL);
    }

    // Get URLS object
    public URLS getIfUrlIfExists() {
        return urlsRepository.findByOriginalURL(ogURL);
    }
    // Private || Codify url using sha256
    private String toHash(String url, Integer size) {
        String sha256 = Hashing.sha256().hashString(url, StandardCharsets.UTF_8).toString();
        return sha256.substring(0,size);
    }

    private boolean urlExists(String url) {
        return urlsRepository.existsByOriginalURL(url);
    }
    private boolean surlExist(String url)
    {
        return urlsRepository.existsByShortURL(url);
    }

}
