package com.alxmr.url_shortenerbackend.service;

import com.alxmr.url_shortenerbackend.dto.URLSDto;

public interface IURLSService {
    URLSDto createSURL(URLSDto urlsDto, String back_half, Boolean needsQR);

    String getOgURL(String surl);

    URLSDto seeAnalytics(Long id, String url);
    Boolean surlExists(String url);
}
