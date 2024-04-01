package com.alxmr.url_shortenerbackend.controller;

import com.alxmr.url_shortenerbackend.dto.URLSDto;
import com.alxmr.url_shortenerbackend.entity.URLS;
import com.alxmr.url_shortenerbackend.mapper.URLSMapper;
import com.alxmr.url_shortenerbackend.service.implementation.URLSService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

// Allow requests to all origins
@CrossOrigin("*")
@AllArgsConstructor
@RestController
public class URLSController {

    private URLSService urlsService;
    // Create a new short url
    @PostMapping("/{back_half}/{needsQR}")
    public ResponseEntity<URLSDto> createSURL(@RequestBody URLSDto urlsDto, @PathVariable String back_half, @PathVariable Boolean needsQR){
        URLSDto savedSURL;
        if(back_half.equals("foo"))
            savedSURL = urlsService.createSURL(urlsDto,"",needsQR);
        else
            savedSURL = urlsService.createSURL(urlsDto,back_half,needsQR);
        return new ResponseEntity<>(savedSURL, HttpStatus.CREATED);
    }

    // Redirection to the main page
    @GetMapping("/")
    public RedirectView redirectMainPage() {
        String mypage = "https://alexismrosales.github.io/url_shortener/";
        return new RedirectView(mypage);
    }
    
    // Redirection for short links to the original ones
    @GetMapping("/{path}")
    public RedirectView redirectSURL(@PathVariable("path") String path){
        String external_url = "https://www.google.com";
        if(urlsService.surlExists(path)) {
            String original_url = urlsService.getOgURL(path);
            return new RedirectView(original_url);
        } else
            return new RedirectView(external_url);
    }
    // Verify if the back-half exist
    @PostMapping("/{back_half}")
    public ResponseEntity<Boolean> CheckBackHalf(@PathVariable("back_half") String back_half){
        Boolean exists = urlsService.surlExists(back_half);
        return new ResponseEntity<>(exists,HttpStatus.OK);
    }
}
