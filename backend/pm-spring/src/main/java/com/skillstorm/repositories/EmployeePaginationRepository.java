package com.skillstorm.repositories;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import com.skillstorm.models.Employee;

@Repository
public interface EmployeePaginationRepository extends PagingAndSortingRepository<Employee, Integer> {
    Page<Employee> findAll(Pageable pageable);
}