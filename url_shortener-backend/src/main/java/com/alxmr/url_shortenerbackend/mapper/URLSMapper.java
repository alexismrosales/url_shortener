package com.alxmr.url_shortenerbackend.mapper;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.entity.URLS;

public class URLSMapper {
    public static URLSDto mapToURLSDto(URLS urls){
        return new URLSDto(
                urls.getId(),
                urls.getOriginalURL(),
                urls.getShortURL(),
                urls.getClicks()
        );
    }
    public static URLS mapToURLS(URLSDto urlsDto){
        return new URLS(
                urlsDto.getId(),
                urlsDto.getOriginalURL(),
                urlsDto.getShortURL(),
                urlsDto.getClicks()
        );
    }
}
