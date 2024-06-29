package com.skillstorm.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.skillstorm.models.Office;

import com.skillstorm.repositories.OfficeRepository;

@Service
public class OfficeService {
	
	@Autowired
	private OfficeRepository repo;
	
	// create a new office
	public Office createOffice(Office office) {
		if (!repo.existsById(office.getOfficeId()))
			return null;
		return repo.save(office);
	}
	
	// get all office
	public Iterable<Office> getAllOffices() {
		return repo.findAll();
	}
	
	// get an office by id
	
	// update an office
	
	// delete an office by id

}