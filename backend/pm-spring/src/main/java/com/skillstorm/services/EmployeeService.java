package com.skillstorm.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.skillstorm.dtos.PaginatedResponse;
import com.skillstorm.models.Department;
import com.skillstorm.models.Employee;
import com.skillstorm.repositories.EmployeePaginationRepository;
import com.skillstorm.repositories.EmployeeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository crudRepo;
	
	@Autowired
	private EmployeePaginationRepository paginationRepo;
	
    public PaginatedResponse<Employee> getPaginatedEmployees(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
    	Page<Employee> employeePage = paginationRepo.findAll(pageable);
    	return new PaginatedResponse<>(
                employeePage.getNumber(),
                employeePage.getSize(),
                employeePage.getTotalElements(),
                employeePage.getTotalPages(),
                employeePage.isLast(),
                employeePage.getContent());
    }
	
	// create a new employee
	public ResponseEntity<Employee> createEmployee(Employee employee) {
		if (!crudRepo.existsById(employee.getEmployeeId()))
		return ResponseEntity.status(HttpStatus.BAD_REQUEST)
				 .header("Error", "An employee with this Id already exists.")
				 .body(employee);
		return ResponseEntity.status(HttpStatus.CREATED)
				.header("Message", "Employee was created.")
				.body(crudRepo.save(employee));
	}
	
	//	
	//	// get all employees
	//	public Iterable<Employee> getAllEmployees() {
	//		return repo.findAll();
	//	}
		
	// get an employee by id
	
	// update one employee
	public Employee updateEmployee(@RequestBody Employee employee) {
		if (!crudRepo.existsById(employee.getEmployeeId()))
			return null;
		return crudRepo.save(employee);
	}
	
	// delete an employee by id

}
