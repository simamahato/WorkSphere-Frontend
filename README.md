WorkSphere is a full-stack web application designed to manage employees, departments, and organizational data efficiently.

Admin login

Email: admin@gmail.com
Pass: admin123

Employee login

Email: ram@gmail.com
Pass: 123


🚀 Core Features
🔐 User Authentication

 • Secure login and registration with JWT tokens
 
 • Role-based access (Admin / Employee)
 
 • Protected routes for authorized users only

👥 Employee Management

 • Add, edit, delete, and view employee profiles
 
 • Manage departments and roles
 
 • Store personal and work-related employee data

📊 Dashboard & Analytics

 • Overview of total employees, attendance, and performance
 
 • Real-time data visualization
 
 • Responsive layout for all devices
 

🔗 API Integration

 • RESTful API built with Express.js and MongoDB
 
 • Frontend consumes APIs via Axios
 
 • Proper status code handling for all responses

⚙️ Error Handling & Validation

 • Centralized error middleware in Express
 
 • Client-side input validation using React
 
 • Descriptive error messages (401, 404, 500, etc.)
 

🌐 Deployment Ready

 • Frontend and backend hosted on Vercel
 
 • Environment variables configured for production
 
 • Continuous deployment via GitHub
 
 • Hosted backend: https://worksphere-backend.vercel.app/
 
 • Hosted frontend: https://worksphere-frontend-inky.vercel.app/login
 

🧩 Scalable Architecture

 • Clean folder structure for maintainability
 
 • Easy to extend with new modules
 
 • Reusable React components and REST endpoints
 

 | Layer                | Technology                        |
| -------------------- | ----------------------------------------- |
| **Frontend**         |  React.js, Ant Design (UI), Axios |
| **Backend**          |  Node.js, Express.js                 |
| **Database**         |  MongoDB                                |
| **Deployment**       |  Vercel (Frontend & Backend)            |
| **State Management** |  Redux or Context API (if added)     |
| **Authentication**   |  JWT (JSON Web Token)                   |


📂 WorkSphere Project Structure

WorkSphere/
│
├── EMS/                # Frontend
│   └── frontend/
│       ├── public/     
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   └── App.js
│       ├── package.json
│       └── vite.config.js
│
└── server/             # Backend
    ├── controllers/
    ├── models/
    ├── routes/
    ├── index.js
    ├── .env
    └── package.json
    
🧪 Setup Instructions

1. Clone the repo
  git clone https://github.com/simamahato/WorkSphere-Frontend.git

2. Backend Setup
  • cd server
  • Install dependencies:
  • npm install
  • Create a .env file (example):
      PORT=5000
      MONGO_URI=<your_mongo_connection_string>
      JWT_SECRET=<your_jwt_secret>

   • Start the backend server:
   • npm run dev    # if using nodemon
          # OR
  • node index.js  # if using plain node
  Backend should run on http://localhost:5000 (or the port you set).

3. Frontend Setup
  • cd ../EMS/frontend
  • Install dependencies:
  • npm install
  • Start the frontend:
  • npm run dev
  • Frontend should run on http://localhost:3000 (or the port Vite assigns).

4. Test
  • Open your browser: http://localhost:3000
  • Ensure API requests from frontend reach backend at http://localhost:5000.


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
