package com.alxmr.url_shortenerbackend.service.implementation;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.entity.URLS;
import com.alxmr.url_shortenerbackend.mapper.URLSMapper;
import com.alxmr.url_shortenerbackend.repository.URLSRepository;
import com.alxmr.url_shortenerbackend.service.IURLSService;
import com.alxmr.url_shortenerbackend.service.implementation.logic.ShortenURL;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class URLSService implements IURLSService {
    private URLSRepository urlsRepository;
    @Override
    public URLSDto createSURL(URLSDto urlsDto, String back_half, Boolean needsQR) {
        ShortenURL shortenURL = new ShortenURL(urlsRepository,urlsDto);
        URLS urls;
        String short_url = shortenURL.toShort(back_half);
        // In case we have duplicated short url without a set backhalf
        if(shortenURL.Duplicate()){
            urls = shortenURL.getIfUrlIfExists();
            return URLSMapper.mapToURLSDto(urls);
        }
        urlsDto.setShortURL(short_url);
        urls = URLSMapper.mapToURLS(urlsDto);
        URLS savedUrls = urlsRepository.save(urls);

        return URLSMapper.mapToURLSDto(savedUrls);
    }

    @Override
    public String getOgURL(String surl) {
        URLS urls =  urlsRepository.findByShortURL(surl);
        return urls.getOriginalURL();
    }

    @Override
    public URLSDto seeAnalytics(Long id, String url) {
        return null;
    }

    @Override
    public Boolean surlExists(String url) {
        return urlsRepository.existsByShortURL(url);
    }

}
