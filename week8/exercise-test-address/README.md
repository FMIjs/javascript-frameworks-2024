## JavaScript Работни Рамки
# Задача за контролно (17 април 2024)

Address Management Application

## Objective:
Build a simple address management application using Angular 17 that allows users to add, view, edit, and delete addresses.

## Requirements:

### Address List Page:

1. Display a list of addresses with details like country, city, street, zip code.
2. Each address item should have option to delete it.
3. Provide a button to navigate to "Add Address" page.

### Add Address Page:

1. Form to add an address with fields for city, street, zip code, etc.
2. Provide a button to submit the form and save the address.

### Routing:

1. Implement routing for the address list, add address.
2. Users should be able to navigate between these pages using Angular's router module.

### Functionality:

Users should be able to add new addresses.
Users should be able to delete addresses from the list.

### Additional Challenges (Bonus):
Implement form validation for required fields like city and street.
Implement form validation for fields like zip code format.

## Hints:

Utilize Angular Forms module for form handling and validation.
Implement a service to manage address data and interact with it from components (no need to connect to any API service, you can store the addresses in a list).
There is an empty address-manager project already created, just run `yarn` and `ng s` to start it. 