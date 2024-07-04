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
import com.skillstorm.models.Office;
import com.skillstorm.repositories.OfficePaginationRepository;
import com.skillstorm.repositories.OfficeRepository;

@Service
public class OfficeService {
	
	@Autowired
	private OfficeRepository officeRepo;
	
	@Autowired
	private OfficePaginationRepository officePaginationRepo;
	
	// created a new office
    public ResponseEntity<Office> createOffice(Office office) {
    	System.out.println("hello");
        if (officeRepo.existsById(office.getOfficeId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            		.header("Error", "An office with this ID already exists.")
            		.body(null);
        } 

        if (office.getMaxCapacity() < 0) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
            		.header("Error", "Office capacity must be 0 or greater.")
            		.body(null);
        }
        
    	office.setEmployees(null);
		return ResponseEntity.status(HttpStatus.CREATED)
				.header("Message", "Office was created.")
				.body(officeRepo.save(office));
        
    }
	
	// get an office by id
	public ResponseEntity<Office> getOfficeById(int officeId) {
		if (!officeRepo.existsById(officeId)) {
			return ResponseEntity.status(HttpStatus.NOT_FOUND)
								 .header("Error", "An office with this Id does not exist.")
								 .body(null);
		}
		return ResponseEntity.status(HttpStatus.OK)
							 .header("Message", "We successfully got an office by Id.")
							 .body(officeRepo.findById(officeId).get());
	}

	// get offices by page
    public PaginatedResponse<Office> getPaginatedOffices(int page, int size) {
    	Pageable pageable = PageRequest.of(page, size);
    	Page<Office> officePage = officePaginationRepo.findAll(pageable);
    	return new PaginatedResponse<>(
                officePage.getNumber(),
                officePage.getSize(),
                officePage.getTotalElements(),
                officePage.getTotalPages(),
                officePage.isLast(),
                officePage.getContent());
    }
    
    //get all offices
	public Iterable<Office> getAllOffices() {
		return officeRepo.findAll();
	}
	
	// created a new office
    public ResponseEntity<Office> updateOffice(Office office) {
        if (!officeRepo.existsById(office.getOfficeId())) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                .header("Error", "Office with this Id does not exist.")
                .body(null);
        } 
        
    	Optional<Office> existingOffice = officeRepo.findById(office.getOfficeId());
    	Office updatedOffice = existingOffice.get();
        
        if (office.getMaxCapacity() < 0) {
        return ResponseEntity.status(HttpStatus.BAD_REQUEST)
        		.header("Error", "Office capacity must be 0 or greater.")
        		.body(null);
	    }
        if (office.getMaxCapacity() < updatedOffice.getEmployees().size()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .header("Error", "Office capacity cannot be lower than current employees.")
                    .body(null);
        }

        updatedOffice.setMaxCapacity(office.getMaxCapacity());
        updatedOffice.setStreetAddress(office.getStreetAddress());
        updatedOffice.setCity(office.getCity());
        updatedOffice.setState(office.getState());
        updatedOffice.setPhone(office.getPhone());
        updatedOffice.setEmployees(existingOffice.get().getEmployees());
		return ResponseEntity.status(HttpStatus.CREATED)
				.header("Message", "Office was update.")
				.body(officeRepo.save(updatedOffice));
	}
	
	// delete an office by id
    public ResponseEntity<Office> deleteOfficeById(int officeId) {
        Optional<Office> officeOptional = officeRepo.findById(officeId);
        if (officeOptional.isPresent()) {
            Office office = officeOptional.get();
            if (office.getEmployees().isEmpty()) {
                officeRepo.deleteById(officeId);
                return ResponseEntity.status(HttpStatus.OK)
                		.header("Message", "Office deleted successfully.")
                		.body(null);
            } else {
                return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                        .header("Error", "Cannot delete office with existing employees.")
                        .body(null);
            }
        } else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND)
            		.header("Error", "Office by Id not found.")
                    .body(null);
        }
    }
}
