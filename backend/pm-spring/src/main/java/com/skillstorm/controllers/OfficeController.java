package com.skillstorm.controllers;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.skillstorm.models.Office;
import com.skillstorm.models.Employee;
import com.skillstorm.services.OfficeService;

@RestController
@RequestMapping("/office")
@CrossOrigin(origins = "*")
public class OfficeController {

	@Autowired
	private OfficeService service;	

	
	// create a new office
	@PostMapping
	public Office createOffice(@RequestBody Office office) {
		return service.createOffice(office);			
	}

	// get all offices
	@GetMapping
	public Iterable<Office> getAllOffices() {		
		return service.getAllOffices();	
	}

//	// get an office by id
//	@GetMapping("/{id}")
//	public Office getOfficeById(@PathVariable int id) {
//		return service.getOfficeById(id);
//	}
//
//	// delete an office by id
//	@DeleteMapping("/{id}")
//	public void deleteOfficeById(@PathVariable int id) {
//		service.deleteOfficeById(id);
//	}
//	
//	// update an office
//	@PutMapping
//	public Office updateOffice(@RequestParam int id, @RequestParam String name, @RequestBody List<Employee> employees) {
//		return service.updateOffice(id, name, employees);
//	}	

}
