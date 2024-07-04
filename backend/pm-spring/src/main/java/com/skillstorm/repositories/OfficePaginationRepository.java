package com.skillstorm.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Office;

@Repository
public interface OfficePaginationRepository extends PagingAndSortingRepository<Office, Integer> {
    Page<Office> findAll(Pageable pageable);
}