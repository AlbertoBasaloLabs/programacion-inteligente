# Sesión 1. Ecosistema y vibraciones

**La IA no te quitará el trabajo, pero lo cambiará para siempre.**
> _Code Smarter!_ 
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)

---

## 1. AstroBookings Project

```bash
mkdir astrobookings
cd astrobookings
git init
# gitignore
echo "node_modules/" > .gitignore
# README.md
echo -e "# AstroBookings \n A REST API and a web application for the fictional space tourism company (AstroBookings).\n Its purpose is to support its employees in their daily operations. Manage the rocket fleet, plan and confirm or cancel launches, as well as record passenger bookings without overbooking. Payments and refunds are processed through a fictional payment gateway.\n It is an MVP, so it does not require authentication or storage features." > README.md
mkdir back
mkdir front
```
### 1.1. Backend
```bash
## Backend
cd back
# Java Spring
curl https://start.spring.io/starter.zip \
  -d dependencies=web \
  -d type=maven-project \
  -d language=java \
  -d javaVersion=25 \
  -d groupId=academy.aicode \
  -d artifactId=astrobookings \
  -d name=astrobookings \
  -d packageName=academy.aicode.astrobookings \
  -o back.zip
unzip back.zip
# Node Express
curl -L https://github.com/AlbertoBasalo/express-boilerplate/archive/refs/heads/main.tar.gz \
  | tar -xz --strip-components=1 -C ./back 
```

### 1.2. Frontend
```bash 
# Frontend
cd front
# Angular
ng new AstroBookings --ai-config=copilot --routing --skip-git --ssr=false --style=css --zoneless --dry-run
```

---
# 2. Health-check Vibes

```md
Create a health-check endpoint for the backend API, and informs about its status in the frontend application.
```

---
# 3. Rockets

## 3.1. Rocket Specification

```md
- As an operator, I want to **register a rocket with its capacity and range of action** to enable its use in launch planning.
- As an operator, I want to **consult the rocket catalog** to quickly select a vehicle compatible with the destination.
- As an operator, I want to **update the operational data of a rocket** to maintain reliable information for business decisions.
- As an operator, I want to **decommission a rocket** to prevent its use in future launches.
```

## 3.2. Implementation

```md
# Code

## Role
Act as a senior software developer.

## Task
Implement the functionality described in the spec file provided.

## Context
The specification with clear problem definition

## Steps
### 1. Analyze the specification and identify the required features.
### 2. Design the simplest solution that meets the requirements.
### 3. Write the minimum amount of code necessary to implement the features.

## Output
Write unit test for logic and data validation.
Do not write documentation, just the functional code with unit tests.
Do not write e2e or integration tests, only unit tests.

## Verification
- [ ] The code should compile without errors.
- [ ] All unit tests should pass.
```

## 3.3. Release

```md
# Release
## Role
Act as a software release manager.
## Task
Release the new feature following the best practices of software release management.

## Context
The feature has been implemented and is ready for release.

## Steps
### 1. Perform manual testing using your browser tool.
### 2. Ensure all changes are committed with clear and descriptive messages.
### 3. Create a git Tag for the new release following semantic versioning.

## Output
A new tagged release in the repository with the new feature.

## Verification
- [ ] The repository is updated with the latest changes.
- [ ] The new release is tagged correctly.
```