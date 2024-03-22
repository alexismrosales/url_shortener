package com.alxmr.url_shortenerbackend.logic;

import com.alxmr.url_shortenerbackend.dto.URLSDto;

public class ShortenURL {
    private Long id;
    private String ogURL;
    private String sURL;
    private int clicks;
    public ShortenURL(URLSDto urlsDto, String back_half)
    {
        this.id = urlsDto.getId();
        this.ogURL = urlsDto.getOgURL();
        this.sURL = urlsDto.getSURL();
        this.clicks = urlsDto.getClicks();
    }

}
