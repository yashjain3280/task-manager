Task Manager App
Project Overview
This is a simple Task Manager application built with React, Redux Toolkit, and React Router. It allows users to create, edit, delete, filter, and reorder tasks. The app uses a mock API to simulate backend CRUD operations.

Features
Create new tasks with title, description, due date, and status.

Edit existing tasks.

Delete tasks.

Filter tasks by status: All, Pending, Completed.

Drag-and-drop to reorder tasks.

Responsive UI with Bootstrap styling.

Client-side routing with React Router.

Technologies Used
React - UI library

Redux Toolkit - State management

React Router - Navigation and routing

Bootstrap 5 - CSS framework for styles and layout

Custom CSS - Additional styling where needed

@hello-pangea/dnd - Drag-and-drop functionality

Mock API - Simulated backend with JavaScript

Installation
Clone the repo

bash
cd task-manager
Install dependencies

bash
npm install
Start the development server

bash
npm start
Open http://localhost:5173 to view in the browser.

Usage
Use the Create Task button to add a new task.

Click Edit on a task row to update its details.

Click Delete to remove a task.

Use the filter dropdown to view tasks by their status.

Drag tasks to reorder them visually.

Folder Structure
/src/components - Reusable React components like TaskForm and TaskTable.

/src/pages - Page components for CreateTaskPage, EditTaskPage, and TaskListPage.

/src/redux - Redux slices and store configuration.

/src/api - Mock API implementations.

/src - Main app entry and routing setup.

Notes
Styling is primarily done using Bootstrap 5 utilities along with some custom CSS.

This project uses a mock API instead of a real backend for demonstration purposes.

