package com.alxmr.url_shortenerbackend.repository;

import com.alxmr.url_shortenerbackend.entity.URLS;
import org.springframework.data.jpa.repository.JpaRepository;

public interface URLSRepository extends JpaRepository<URLS,Long>{
}
