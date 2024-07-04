package com.skillstorm.controllers;

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
import com.skillstorm.dtos.PaginatedResponse;

import com.skillstorm.services.OfficeService;

@RestController
@RequestMapping("/office")
@CrossOrigin(origins = "*")
public class OfficeController {

	@Autowired
	private OfficeService service;
	
	@PostMapping
	public ResponseEntity<Office> createOffice(@RequestBody Office office) {
		return service.createOffice(office);			
	}
	
	@GetMapping("/{officeId}")
	public ResponseEntity<Office> getOfficeById(@PathVariable int officeId) {
		return service.getOfficeById(officeId);
	}
	
    @GetMapping("/page")
    public PaginatedResponse<Office> getPaginatedOffices(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size) {
        return service.getPaginatedOffices(page, size);
    }
    
    @GetMapping()
	public Iterable<Office> getAllOffices() {
		return service.getAllOffices();
	}
    
	@PutMapping
	public ResponseEntity<Office> updateOffice(@RequestBody Office office) {
		return service.updateOffice(office);
	}
    
	@DeleteMapping("/{officeId}")
	public ResponseEntity<Office> deleteOfficeById(@PathVariable int officeId) {
		return service.deleteOfficeById(officeId);
	}
	
}
