package com.alxmr.url_shortenerbackend.service.implementation;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.entity.URLS;
import com.alxmr.url_shortenerbackend.mapper.URLSMapper;
import com.alxmr.url_shortenerbackend.repository.URLSRepository;
import com.alxmr.url_shortenerbackend.service.IURLSService;

public class URLSService implements IURLSService {
    private URLSRepository urlsRepository;
    @Override
    public URLSDto createSURL(URLSDto urlsDto, String back_half, Boolean needsQR) {
        urlsDto.getSURL();
        URLS urls = URLSMapper.mapToURLS(urlsDto);
        URLS savedUrls = urlsRepository.save(urls);
        return URLSMapper.mapToURLSDto(savedUrls);
    }

    @Override
    public URLSDto seeAnalytics(Long id, String url) {
        return null;
    }
}
