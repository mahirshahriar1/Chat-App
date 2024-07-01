# Realtime Chat App

A Realtime Chat Application built using the MERN stack (MongoDB, Express, React, Node.js), Zustand for global state management, and Socket.IO for real-time communication. 

Mostly followed a youtube tutorial for this.

**But this project also integrates CORS policy and additional security using refresh and access tokens, along with utility functions to fetch information from the backend.**

## Features

- **Real-time Messaging**: Instant messaging between users using Socket.IO.
- **Global State Management**: Efficient state management with Zustand.
- **Authentication**: Secure user authentication with JWT access and refresh tokens.
- **CORS Policy**: Configured CORS for secure cross-origin requests.
- **User-friendly Interface**: Simple and intuitive UI built with React.
- **Backend Utilities**: Various utility functions to fetch and manage data from the backend.

## Technologies Used

- **Frontend**:
  - React
  - Zustand
  - Socket.IO Client

- **Backend**:
  - Node.js
  - Express
  - MongoDB
  - Socket.IO
  - JWT (JSON Web Tokens) for authentication

### ENV files
PORT=5000 \
MONGO_DB_URI=your_mongodb_uri \
JWT_SECRET=your_jwt_secret \
REFRESH_TOKEN_SECRET=your_jwt_refresh_secret 
ACCESS_TOKEN_SECRET=your_jwt_access_secret \
NODE_ENV=development