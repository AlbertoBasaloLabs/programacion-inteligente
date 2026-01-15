---
name: analyze
description: Analyze a piece of code or a software project to provide insights, identify issues, or suggest improvements.
agent: Analyst
---
# Analyze

Make an analysis based on the following briefing 

## Context

**AstroBookings** aims to provide a backend API for managing space travel bookings, including rockets, launches, and bookings. 
The system is designed for demonstration and training purposes, not for production use, so no security nor db needed at initial stage.

There will be launches scheduled for different rockets, and users can book seats on these launches. 
Rockets have a limited number of seats, and bookings should not exceed this limit.
Launches have minimum passengers requirements to be economical.
Launches can be in different states: scheduled, canceled, confirmed, completed.
A customer wil be identified by their email address, having a name, and phone number.
One customer can book multiple seats on a launch, but cannot exceed the available seats.
Customers will be billed upon booking, and payments will be processed through a mock payment gateway.