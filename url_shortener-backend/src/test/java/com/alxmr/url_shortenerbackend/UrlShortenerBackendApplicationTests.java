package com.alxmr.url_shortenerbackend;

import com.alxmr.url_shortenerbackend.service.implementation.logic.ShortenURL;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Stack;

import static org.junit.jupiter.api.Assertions.assertEquals;

@SpringBootTest
class UrlShortenerBackendApplicationTests {
	public String[] test = {"hola.com", "hola.com"};
	public Stack<String> results = new Stack<String>();


}
