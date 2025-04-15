/*
Lab Name: Assignment 3: Using JavaScript and Deploying a Website
Description:  A booking rate calculator that allows users to select days of the week and choose between half-day or full-day rates. 
It calculates the total cost based on the number of selected days and the chosen rate, and allows users to clear selections.
Author: Utsanakorn Chinkonglar(Kate)
Student ID: 000965921
Date: 2025-04-15
*/

/********* Create Variables *********/

// Default full-day rate
let dailyRate = 35; 

// Variable to count how many days have been selected
let dayCounter = 0;

// Select all the day buttons (assuming they have class="blue-hover")
const dayButtons = document.querySelectorAll(".blue-hover");

// Button to clear all selected days
const clearButton = document.getElementById("clear-button");

// Buttons for selecting half-day and full-day rates
const halfButton = document.getElementById("half");
const fullButton = document.getElementById("full");

// Element where the total calculated cost will be displayed
const costDisplay = document.getElementById("calculated-cost");

/********* Colour Change Days of Week *********/
// When the day buttons are clicked, we will apply the "clicked" class to that element, and update the variables.

dayButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Toggle the clicked class when a day is clicked
        if (!button.classList.contains("clicked")) {
            button.classList.add("clicked");
            dayCounter++;
        } else {
            button.classList.remove("clicked");
            dayCounter--;
        }
        
        // Recalculate the total cost
        calculateCost();
    });
});

/********* Clear Days *********/
// When the "clear-button" is clicked, reset all selections.
clearButton.addEventListener("click", function() {
    dayButtons.forEach(function(button) {
        button.classList.remove("clicked");
    });
    dayCounter = 0; // Reset day counter
    calculateCost(); // Recalculate the cost to 0
});

/********* Change Rate *********/
// When the half-day button is clicked, set the daily rate to $20.
halfButton.addEventListener("click", function() {
    dailyRate = 20; // Set the rate to half-day price
    halfButton.classList.add("clicked");
    fullButton.classList.remove("clicked");
    
    // Recalculate the total cost
    calculateCost();
});

// When the full-day button is clicked, set the daily rate back to $35.
fullButton.addEventListener("click", function() {
    dailyRate = 35; // Set the rate to full-day price
    fullButton.classList.add("clicked");
    halfButton.classList.remove("clicked");
    
    // Recalculate the total cost
    calculateCost();
});

/********* Calculate Cost *********/
// When a calculation is needed, calculate the cost and display it.
function calculateCost() {
    let totalCost = dailyRate * dayCounter;
    costDisplay.textContent = Math.round(totalCost * 100) / 100;
}

