HR Portal

1. Project Description
To demonstrate the design, development, and deployment of an HR Portal using React for managing employee data, onboarding, and leave requests. This project enables users to register, log in, and interact with HR services, while HR administrators manage employee profiles and approve leave requests. The objective is to streamline HR operations, reduce manual overhead, and improve the employee experience through a centralized digital system.

1 Tech
- React Vite
- JSX
- CSS 
- JSON Server simulated backend
- Git  version control
- LocalStorage for user authentication & role-based access

 *Add architecture diagram or flow chart screenshot here if needed*

3. Project User Stories

Sprint 1
- As a user, I want to register an account so I can log in to the portal.
- As a user, I want to log in so I can access features based on my role.
- As a dev, I want to route users based on their role (HR or employee).
- As a dev, I want to persist user sessions using localStorage.

Sprint 2
- As an employee, I want to submit a leave request.
- As an HR admin I want to view, add, and remove employees.
- As an HR admin,I want to see submitted leave requests.
- As a dev I want to organize components cleanly and apply a basic style for presentation.

4. Project Git Repository

GitHub: https://github.com/rsmith8414/HRPortal

To clone the repo:

```bash
git clone https://github.com/rsmith8414/HRPortal
```

5. How to Run the Project

1. Clone the repository:

```bash
git clone https://github.com/rsmith8414/HRPortal
```

2. Open the folder in VS Code  
3. Run the app:

bash
npm install
npm run dev:all

4. Visit [http://localhost:5173](http://localhost:5173) in your browser

6. Directory Structure

```
/hr-portal
│
├── /data/
│   └── db.json               JSON server data (users, employees, leaves)
├── /src/
│   ├── /components/
│   │   └── NavBar.jsx
│   ├── /pages/
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── HRDashboard.jsx
│   │   ├── EmployeeDashboard.jsx
│   │   ├── LeaveRequest.jsx
│   │   └── NotFound.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
```

7. Source Code Files

App.jsx  Handles routing and role-based access  
Login.jsx User login page  
Signup.jsx New user registration  
NavBar.jsxNavigation links (conditional by role)  
HRDashboard.jsx Add/delete employees, view leave requests  
EmployeeDashboard.jsxPlaceholder for employee data  
LeaveRequest.jsxSubmit leave request form  
db.json Stores user accounts, employee records, and leave data

HR username
hr@example.com
hr123
