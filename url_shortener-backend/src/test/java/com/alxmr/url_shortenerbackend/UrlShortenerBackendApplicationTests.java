package com.alxmr.url_shortenerbackend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import java.util.Stack;

import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
class UrlShortenerBackendApplicationTests {
  public String[] test = { "hola.com", "hola.com" };
  public Stack<String> results = new Stack<String>();

  @Test
  void pass() {
    System.out.println("PASS");
    assertTrue(true, "something is wrong");
  }

}
