---
name: analyze
description: Analyze a software project to provide insights, features, restrictions and business requirements.
argument-hint: Provide the project idea, briefing document or the current project files to start the analysis.
agent: Analyst
---
# Analyze

Make an analysis based on the following product briefing 

## Context

**AstroBookings** is a fictional space travel booking system used during training sessions and demos.

They need a backend API for offering space travel bookings, managing rockets, launches, and payments. 

- There will be launches scheduled for different rockets, and users can book seats on these launches. 
- Rockets have a limited number of seats, and bookings should not exceed this limit.
- Launches have minimum passengers requirements to be economical.
- Launches can be in different states: scheduled, canceled, confirmed, completed.
- A customer wil be identified by their email address, having a name, and phone number.
- One customer can book multiple seats on a launch, but cannot exceed the available seats.
- Customers will be billed upon booking, and payments will be processed through a mock gateway.

The system is designed for demonstration and training purposes, not for production use. 

No security nor db needed at initial stage.