# 🧑‍💼 Employee Management System (EMS)

A simple **full-stack web application** for managing employees.  
Built with **React (frontend)**, **Spring Boot (backend)**, and **PostgreSQL (database)**.

---

## ✨ Features
- ➕ Add new employees  
- 📋 View all employees  
- ✏️ Update employee details  
- ❌ Delete employees  

---

## 🛠 Tech Stack
- **Frontend:** React, Axios, React Router  
- **Backend:** Spring Boot (REST API, JPA/Hibernate)  
- **Database:** PostgreSQL  
- **Build Tools:** Maven (backend), npm/yarn (frontend)  

---

## ⚙️ Setup & Run

### 1. Clone the repository
```bash
git clone https://github.com/your-username/ems.git
cd ems
2. Backend (Spring Boot)
Navigate to backend folder:

bash
Copy code
cd backend
Update PostgreSQL credentials in application.properties:

properties
Copy code
spring.datasource.url=jdbc:postgresql://localhost:5432/ems_db
spring.datasource.username=your_username
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
Run backend:

bash
Copy code
mvn spring-boot:run
API will be available at:
http://localhost:8080/api/employees

3. Frontend (React)
Navigate to frontend folder:

bash
Copy code
cd frontend
Install dependencies:

bash
Copy code
npm install
Start React app:

bash
Copy code
npm start
UI will be available at:
http://localhost:3000

📂 Project Structure
bash
Copy code
ems/
│── backend/               # Spring Boot backend
│   ├── src/main/java/...  # Java source code
│   ├── src/main/resources # application.properties
│   └── pom.xml
│
│── frontend/              # React frontend
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
