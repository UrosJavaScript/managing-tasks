# managing-tasks

Project documentation: Task Managing Application

# Project description

Task Management The application is a web application designed for task management. It allows users to login, register, add, edit and delete tasks of different priorities.

# Functionality

Authentication
Login: Users can login by entering their username and password.
Registration: New users can register by creating an account with a username, email address and password.
Token Management: The user's token is stored in localStorage for authentication and authorization to access protected resources.

# React Context

Global State: Using the React Context API, the global state of the application is managed, allowing data to be shared between components without the need to pass props through multiple layers.

# Custom Hooks

(Just some custom hooks:)
useAuth: Custom hook for managing user authentication.
useTasks: Custom hook for managing tasks, including adding, editing, deleting, and filtering.

# Technical details

Technologies: The project was developed using the React framework with TypeScript support and Vite.
Styling: Used Tailwind CSS for quick and efficient styling of components.
Code Organization: Code is organized in directories such as components, context, hooks, services for easier navigation and maintenance.
Optimization: Using Axios for HTTP requests as well as caching requests with axios-cache-interceptor to improve application performance and efficiency.

# Getting Started Guide

Dependency installation: npm i
Launching the Application: npm run dev

# Autor

Uros Kovcic
kowcicuros70@gmail.com
