/*
Lab Name: Assignment 3: Using JavaScript and Deploying a Website
Description: This script changes the content of the contact page upon form submission.
Author: Utsanakorn Chinkonglar(Kate)
Student ID: 000965921
Date: 2025-04-15
*/

// Adding event listener to the "submit-button"
document.getElementById("submit-button").addEventListener("click", function() {
    // Get the element where the thank you message will be displayed (assuming it's part of the main content)
    var mainContent = document.querySelector("main");
    
    // Create a new <p> element for the thank you message
    var thankYouMessage = document.createElement("p");
    
    // Set the text content for the <p> element
    thankYouMessage.textContent = "Thank you for your message!";
    
    // Style the <p> element with 24px font size
    thankYouMessage.style.fontSize = "24px";
    
    // Add the thank you message below the header and before the other content in the main section
    mainContent.innerHTML = ""; // Clear the main content (or you can append the message instead)
    mainContent.appendChild(thankYouMessage); // Add the thank you message
});

