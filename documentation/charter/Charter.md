# Charter

# Project Title: Personnel Management System

## **Objective:**

- Create a solution for an administrator to manage employees at any office.
- The administrator should be able to get, delete, create, or update employees at any office(s).
    - The application should handle the case where a new employee is added to an office that has exceeded its max number of employees.
- Clear and concise UI/UX to allow the administrator to manage employees quickly and effectively

# Use Cases

- As an administrator, I want to be able to view all the employees of a given office.
- As an administrator, I want to be able to view all the offices.
- As an administrator, I want to be able to create a new office with a capacity limit.
- As an administrator, I want to be able to create a new employee.
    - As an administrator, I want the *option* to assign an employee to an office at creation.
- As an administrator, I want to be able to add new employees to an office.
    - As an administrator, I want to be prevented from adding employees past an office’s capacity.
- As an administrator, I want to be able to delete an office from the database.
    - As an administrator, I want to be prevented from removing an office with employees.
- As an administrator, I want to be able to remove employees from an office.
- As an administrator, I want to be able to update an employee record.
- As an administrator, I want to be able to remove an employee record from the database.
- As an administrator, I want to be able to update the information on an including capacity limit.
    - The capacity limit cannot be lower than the current capacity.

# Proposed Architecture

We will use a client-server architecture with the MVC pattern for the solution. HTTP requests will supported by a RESTful API using Spring Boot. For storage, we will use a relational database with MySQL. The website will be created using the Angular framework.

# API

## /employee

### Create a new employee

- Method: POST
- URL: `employee`
- Description: Create a new employee
    - Supports Office Id input as an optional
- Requests/Responses
    

### Get all employees

- Method: GET
- URL: `employee`
- Description: Get all employees
- Requests/Responses


### Get an employee by Id

- Method: GET
- URL: `employee/{employee_id}`
- Description: Get an employee by Id
- Requests/Responses
    

### Get Paginated Employees

- Method: GET
- URL: `employee/page?page=1&size=10`
- Description: return a paginated response object of employees
- Request/Response
    

### Update an employee

- Method: PUT
- URL: `employee`
- Description: Move an employee into an office
- Requests/Responses
    

### Delete an employee by Id

- Method: DELETE
- URL: `employee/{id}`
- Description: Delete an employee from the database
- Requests/Responses
    

## /office

### Create a new Office

- Method: POST
- URL: `office`
- Description: Create a new office
- Requests/Responses
    

### Get All Offices

- Method: GET
- URL: `office`
- Description: Get all offices and all employees
- Requests/Responses
    

### Get Office By Id

- Method: GET
- URL: `office/{id}`
- Description: Get an office and all the employees
- Requests/Responses
    

### Update an Office

- Method: PUT
- URL: `office`
- Description: Update the details of an office
- Requests/Responses
    

### Delete an employee by Id

- Method: DELETE
- URL: `employee/{id}`
- Description: Delete an employee from the database
- Requests/Responses
    

## Entities

### Employee Table

- (PK) INT employee_id, Not Null, Auto Increment
- VARCHAR(30) first_name, Not Null
- VARCHAR(30) last_name, Not Null
- VARCHAR(60) job_title, Null
- VARCHAR(20) employment_status, Null
- VARCHAR(45) email, Not Null
- VARCHAR(45) name, Null
- (FK) INT office_id, Null

### Office Table

- (PK) INT office_id, Not Null, Auto Increment
- INT max_capacity, Not Null
- VARCHAR(60) street_address, Not Null
- VARCHAR(30) city, Not Null
- VARCHAR(2) state, Not Null
- VARCHAR(20) phone, Not Null
