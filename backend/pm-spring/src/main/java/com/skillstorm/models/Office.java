package com.skillstorm.models;

import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.FetchType;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "office")
public class Office {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "office_id")
	private int officeId;
	
	@Column(name = "max_capacity")
	private String maxCapacity;
	
	@Column(name = "street_address")
	private String streetAddress;
	
	@Column(name = "state")
	private String state;
	
	@Column(name = "phone")
	private String phone;
	
	@OneToMany(mappedBy = "office", fetch = FetchType.EAGER)
	@JsonIgnoreProperties("office")
	private List<Employee> employees;

	public Office() {
		super();
	}

	public Office(int officeId, String maxCapacity, String streetAddress, String state, String phone,
			List<Employee> employees) {
		super();
		this.officeId = officeId;
		this.maxCapacity = maxCapacity;
		this.streetAddress = streetAddress;
		this.state = state;
		this.phone = phone;
		this.employees = employees;
	}

	public int getOfficeId() {
		return officeId;
	}

	public void setOfficeId(int officeId) {
		this.officeId = officeId;
	}

	public String getMaxCapacity() {
		return maxCapacity;
	}

	public void setMaxCapacity(String maxCapacity) {
		this.maxCapacity = maxCapacity;
	}

	public String getStreetAddress() {
		return streetAddress;
	}

	public void setStreetAddress(String streetAddress) {
		this.streetAddress = streetAddress;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getPhone() {
		return phone;
	}

	public void setPhone(String phone) {
		this.phone = phone;
	}

	public List<Employee> getEmployees() {
		return employees;
	}

	public void setEmployees(List<Employee> employees) {
		this.employees = employees;
	}
	
}
