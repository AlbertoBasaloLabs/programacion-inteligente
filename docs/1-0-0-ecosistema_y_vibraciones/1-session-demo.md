# Sesión 1. Ecosistema y vibraciones

**La IA no te quitará el trabajo, pero lo cambiará para siempre.**
> _Code Smarter!_ 
> [**Alberto Basalo**](https://albertobasalo.dev)@[AICode.Academy](https://aicode.academy)

---

## 1. Ecosystem

### 1.1. AstroBookings Project

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

### 1.2. Backend
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
  | tar -xz 
  --strip-components=1 
  -C ./back 
```

### 1.3. Frontend
```bash 
# Frontend
cd front
# Angular
ng new AstroBookings 
  --ai-config=copilot 
  --routing 
  --skip-git 
  --ssr=false 
  --style=css 
  --zoneless 
  --dry-run
```

---

## 2. Vibes

### 2.1 Health-check Vibes


```md
Create a health-check endpoint for the backend API, and informs about its status in the frontend application.
```

### 2.2. Prompt Engineering Vibes

```md
# Health-check feature
## Role
Act as a senior software developer.
## Task
Implement a health-check endpoint for the backend API, and informs about its status in the frontend application.
## Context
The backend is a {lang/framework} application, and the frontend is an {lang/framework} application. 
The health-check endpoint should return a JSON response with the status and uptime of the server. 
The frontend should display this status in a user-friendly way.
## Steps
1. Implement the health-check endpoint in the backend.
2. Create a service in the frontend to consume the health-check endpoint.
3. Display the health status in the frontend application.
## Output
- Clean and functional code for the health-check feature.
- No unit nor integration tests are required.
## Verification
- [ ] The server for the API starts without errors.
- [ ] The server for the frontend starts without errors.
- [ ] The health-check endpoint returns the correct JSON response.
- [ ] The frontend displays the health status.
```

---

## 3. AI-Driven Development

### 3.1. Problem Specification

```md
# Rockets Management Feature

- As an operator, I want to **register a rocket with its capacity and range of action** to enable its use in launch planning.
- As an operator, I want to **consult the rocket catalog** to quickly select a vehicle compatible with the destination.
- As an operator, I want to **update the operational data of a rocket** to maintain reliable information for business decisions.
- As an operator, I want to **decommission a rocket** to prevent its use in future launches.
```

### 3.2. Solution Implementation

```md
# Rockets Management Feature Implementation
## Data Model
- Rocket: 
  - id: string , unique identifier
  - name: string , unique
  - capacity: number , [1..9]
  - range: enum , (Earth, Moon, Mars)
  - decommissioned?: boolean
## Backend API en {lang/framework}
- An endpoint to create a rocket with its capacity and range of action.
- An endpoint to consult the rocket catalog.
- An endpoint to update the operational data of a rocket.
- An endpoint to decommission a rocket.
## Frontend Application en {lang/framework}
- A form to register a new rocket with its capacity and range of action.
- A view to consult the rocket catalog.
- A form to update the operational data of a rocket.
- A button to decommission a rocket.
```

### 3.3. Acceptance and Release

```md
# Rockets Management Acceptance and Release
## Acceptance Criteria
- [ ] IF a new rocket is registered with valid data, THEN it should be added to the catalog.
- [ ] IF the rocket catalog is consulted, THEN it should display all registered rockets.
- [ ] IF a rocket's operational data is updated, THEN the changes should be reflected in the catalog.
- [ ] IF a rocket is decommissioned, THEN it should no longer be available for future launches.
- [ ] WHEN invalid data is provided, THEN the system should return appropriate error messages.
- [ ] WHEN a rocket is found by its ID, THEN the system should return a not found error.
```

### 3.4 Prompt Engineering 

```md
# Rockets Management Feature 

## Role
Act as a software engineer responsible 

## Task
Implement the Rockets Management feature, which includes creating, consulting, updating, and decommissioning rockets in the system.

## Context
- As an operator, I want to **register a rocket with its capacity and range of action** to enable its use in launch planning.
- As an operator, I want to **consult the rocket catalog** to quickly select a vehicle compatible with the destination.
- As an operator, I want to **update the operational data of a rocket** to maintain reliable information for business decisions.
- As an operator, I want to **decommission a rocket** to prevent its use in future launches.

## Steps

1. Implement the backend API endpoints in {lang/framework}.
- [ ] Create a POST endpoint to register a new rocket with its capacity and range of action.
- [ ] Create a GET endpoint to consult the rocket catalog.
- [ ] Create a PUT endpoint to update the operational data of a rocket.
- [ ] Create a DELETE endpoint to decommission a rocket.
2. Develop the frontend application features in {lang/framework} 
- [ ] Create a form to register a new rocket with its capacity and range of action.
- [ ] Create a view to consult the rocket catalog.
- [ ] Create a form to update the operational data of a rocket.
- [ ] Create a button to decommission a rocket.

## Output

- A fully functional Rockets Management feature in both the backend API and the frontend application, allowing operators to manage rockets effectively.

## Verification

Run the server API and frontend servers.
Use the browser tool to test the endpoints and the frontend features, ensuring that all acceptance criteria are met:

- [ ] IF a new rocket is registered with valid data, THEN it should be added to the catalog.
- [ ] IF the rocket catalog is consulted, THEN it should display all registered rockets.
- [ ] IF a rocket's operational data is updated, THEN the changes should be reflected in the catalog.
- [ ] IF a rocket is decommissioned, THEN it should no longer be available for future launches.
- [ ] WHEN invalid data is provided, THEN the system should return appropriate error messages.
- [ ] WHEN a rocket is found by its ID, THEN the system should return a not found error.
```