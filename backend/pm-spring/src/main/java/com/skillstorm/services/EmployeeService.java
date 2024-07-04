package com.skillstorm.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.skillstorm.dtos.PaginatedResponse;
import com.skillstorm.models.Employee;
import com.skillstorm.models.Office;
import com.skillstorm.repositories.EmployeePaginationRepository;
import com.skillstorm.repositories.EmployeeRepository;
import com.skillstorm.repositories.OfficeRepository;

@Service
public class EmployeeService {
	
	@Autowired
	private EmployeeRepository employeeRepo;
	
	@Autowired
	private EmployeePaginationRepository employeePaginationRepo;
	
	@Autowired
	private OfficeRepository officeRepo;
	
	// created a new employee
    public ResponseEntity<Employee> createEmployee(Employee employee) {
        if (employeeRepo.existsById(employee.getEmployeeId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            		.header("Error", "An employee with this ID already exists.")
            		.body(null);
        }

        if (employee.getOffice() != null && employee.getOffice().getOfficeId() != null) {
            Optional<Office> officeOptional = officeRepo.findById(employee.getOffice().getOfficeId());
            if (officeOptional.isPresent()) {
                Office office = officeOptional.get();

                if (office.getEmployees().size() >= office.getMaxCapacity()) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    		.header("Error", "Adding this employee will exceed the office's maximum capacity.")
                    		.body(null);
                }

                employee.setOffice(office);
            } else {
                employee.setOffice(null);
            }
        } else {
            employee.setOffice(null);
        }

		return ResponseEntity.status(HttpStatus.CREATED)
				.header("Message", "Employee was created.")
				.body(employeeRepo.save(employee));
    }
	
	// get an employee by id
	public ResponseEntity<Employee> getEmployeeById(int employeeId) {
		if (!employeeRepo.existsById(employeeId)) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
								 .header("Error", "An employee with this Id does not exist.")
								 .body(null);
		}
		return ResponseEntity.status(HttpStatus.OK)
							 .header("Message", "We successfully got an employee by Id.")
							 .body(employeeRepo.findById(employeeId).get());
	}

	// get employees by page
    public PaginatedResponse<Employee> getPaginatedEmployees(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
    	Page<Employee> employeePage = employeePaginationRepo.findAll(pageable);
    	return new PaginatedResponse<>(
                employeePage.getNumber(),
                employeePage.getSize(),
                employeePage.getTotalElements(),
                employeePage.getTotalPages(),
                employeePage.isLast(),
                employeePage.getContent());
    }
    
    //get all employees
	public Iterable<Employee> getAllEmployees() {
		return employeeRepo.findAll();
	}
	
	// created a new employee
    public ResponseEntity<Employee> updateEmployee(Employee employee) {
        if (!employeeRepo.existsById(employee.getEmployeeId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .header("Error", "Employee with this Id does not exist.")
                .body(null);
        }

        if (employee.getOffice() != null && employee.getOffice().getOfficeId() != null) {
            Optional<Office> officeOptional = officeRepo.findById(employee.getOffice().getOfficeId());
            if (officeOptional.isPresent()) {
                Office office = officeOptional.get();

                if (office.getEmployees().size() >= office.getMaxCapacity()) {
                    return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    		.header("Error", "Adding this employee will exceed the office's maximum capacity.")
                    		.body(null);
                }

                employee.setOffice(office);
            } else {
                employee.setOffice(null);
            }
        } else {
            employee.setOffice(null);
        }

        Employee savedEmployee = employeeRepo.save(employee);
        return ResponseEntity.status(HttpStatus.CREATED)
            .header("Message", "Employee was updated.")
            .body(savedEmployee);
    }
	
	// delete an employee by id
	public void deleteEmployeeById(int employeeId) {
		employeeRepo.deleteById(employeeId);
	}

}
