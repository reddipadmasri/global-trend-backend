# GLOBAL TREND – Task Manager Backend

## Overview
This is the **backend API** for the GLOBAL TREND Task Management Web Application.  
Built with **Node.js + Express** and **MongoDB Atlas**, it supports **CRUD operations** for tasks.  
It communicates with the frontend dashboard to provide persistent task management.

---

## Features
- Create, Read, Update, Delete tasks  
- Tasks persist in **MongoDB Atlas**  
- Fully deployed on **Render**

---

## API Endpoints
| Method | Endpoint        | Description               |
|--------|----------------|---------------------------|
| GET    | /api/tasks      | Get all tasks             |
| POST   | /api/tasks      | Create a new task         |
| PUT    | /api/tasks/:id  | Update a task by ID       |
| DELETE | /api/tasks/:id  | Delete a task by ID       |

> All endpoints return JSON responses.

---

## Tech Stack
- Node.js  
- Express.js  
- MongoDB Atlas (Cloud Database)  
- Backend hosted on **Render**

---

## Live Backend
- Render API URL: [https://global-trend-backend.onrender.com/api/tasks](https://global-trend-backend.onrender.com/api/tasks)

---

## Setup Locally

1. **Clone the repo**:

```bash
git clone https://github.com/<your-username>/backend.git
cd backend
Install dependencies:

npm install
Create a .env file in the root folder:

PORT=5000
MONGO_URI=mongodb+srv://taskmanageruser:taskmanager123@cluster0.f5yq1y1.mongodb.net/taskmanager?retryWrites=true&w=majority
Make sure your .env file is not pushed to GitHub (sensitive info).

Start the server:

node server.js
The server will run on http://localhost:5000 (or the PORT you set)

Test API endpoints using Postman or your frontend dashboard.
