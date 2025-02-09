

## Overview
Quick Chat App is a real-time messaging application built using React (front-end) and Node.js with WebSocket (back-end). The application supports user authentication, message persistence, and chat history.

## Features
- Real-time chat using WebSocket
- User authentication (signup & login)
- Persistent chat history stored in the database
- Message timestamps
- Secure password hashing

## Technologies Used
### Front-End
- React.js
- Tailwind CSS
- Axios

### Back-End
- Node.js
- Express.js
- WebSocket
- MongoDB
- JWT Authentication

### Testing
- Jest
- Supertest

## Installation & Setup
### Prerequisites
Make sure you have the following installed:
- Node.js (v16 or later)
- MongoDB
- npm or yarn

### Clone the Repository
```sh
git clone https://github.com/Mdimran707/quick-chat.git
cd quick-chat-app
```

### Backend Setup
1. Navigate to the server directory:
   ```sh
   cd server
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and configure the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret_key
   ```
4. Start the backend server:
   ```sh
   npm start
   ```

### Frontend Setup
1. Navigate to the client directory:
   ```sh
   cd client
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React app:
   ```sh
   npm start
   ```

## Running Tests
To run tests for the backend, navigate to the `server` directory and run:
```sh
npm test
```

## API Endpoints
### Authentication
- **POST** `/api/auth/signup` - Register a new user
- **POST** `/api/auth/login` - Authenticate user and return JWT

### Chat
- **GET** `/api/messages` - Fetch chat history
- **POST** `/api/messages` - Send a new message

## Folder Structure
```
quick-chat-app/
│-- server/              # Backend
│   ├── controllers/    # Business logic for routes
│   ├── models/         # Mongoose schemas
│   ├── routes/         # Express routes
│   ├── tests/          # Jest test files
│   ├── config/         # Configuration files
│   ├── app.js          # Express app
│   ├── server.js       # Server entry point
│
│-- client/              # Frontend
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Pages
│   │   ├── services/    # API calls
│   │   ├── App.js       # Main App Component
│   ├── package.json
│
│-- README.md            # Documentation
```

## Deployment
To deploy your app, use services like:
- **Frontend**: Vercel, Netlify
- **Backend**: Render, Heroku, DigitalOcean
- **Database**: MongoDB Atlas

## License
This project is licensed under the MIT License.

## Author
Md Imran - [LinkedIn](https://www.linkedin.com/in/md-imran-3a0993248)



