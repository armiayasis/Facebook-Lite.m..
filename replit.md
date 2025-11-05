# Facebook Lite - Replit Setup

## Project Overview
Facebook Lite is a full-stack social media platform built with the MERN stack (MongoDB, Express.js, React, Node.js). It features real-time chat using Socket.IO, user authentication with JWT, image uploads via Cloudinary, and a modern dark/light theme UI.

## Recent Changes (November 5, 2025)
- Configured project for Replit environment
- Set up frontend to run on port 5000 with proper host configuration
- Configured backend to run on port 3001
- Updated CORS settings to allow Replit domains
- Made MongoDB connection optional (app can run without database)
- Installed all dependencies for both frontend and backend
- Set up frontend workflow for automatic deployment

## Project Architecture

### Frontend
- **Technology**: React.js with Create React App
- **Port**: 5000 (configured for Replit webview)
- **Host**: 0.0.0.0 (allows Replit proxy)
- **Location**: `/frontend` directory
- **Key Features**:
  - User authentication (signup/login)
  - Post creation and interactions (like, comment)
  - Real-time chat interface
  - User profiles and following system
  - Dark/light theme toggle
  - Responsive design

### Backend
- **Technology**: Node.js + Express.js
- **Port**: 3001
- **Host**: localhost
- **Location**: `/backend` directory
- **Key Features**:
  - RESTful API endpoints
  - JWT authentication
  - Socket.IO for real-time features
  - MongoDB integration (optional)
  - Cloudinary image uploads
  - Security middleware (CORS, Helmet, rate limiting)

## Environment Variables

### Required Secrets (Already Configured in Replit Secrets)
- `MONGODB_URI` - MongoDB connection string
- `JWT_SECRET` - Secret key for JWT tokens
- `CLOUDINARY_CLOUD_NAME` - Cloudinary cloud name
- `CLOUDINARY_API_KEY` - Cloudinary API key
- `CLOUDINARY_API_SECRET` - Cloudinary API secret

### Backend Configuration (`backend/.env`)
- `PORT=3001` - Backend server port
- `NODE_ENV=development` - Environment mode

### Frontend Configuration (`frontend/.env`)
- `PORT=5000` - Frontend server port
- `HOST=0.0.0.0` - Allow all hosts (required for Replit)
- `WDS_SOCKET_PORT=0` - Webpack dev server socket configuration
- `DANGEROUSLY_DISABLE_HOST_CHECK=true` - Disable host check (required for Replit proxy)

## How the App Works

### Frontend-Backend Communication
The frontend automatically detects whether it's running on Replit or locally and configures the backend URL accordingly:
- On Replit: Uses the current domain (https://[replit-domain])
- Locally: Uses http://localhost:3001

This is configured in `frontend/src/server_url.js`.

### Real-time Features
Socket.IO is configured to work with Replit's proxy system:
- CORS allows Replit domains (.replit.dev, .repl.co)
- Socket connections work seamlessly between frontend and backend

## Running the Project

### Development Mode (Current Setup)
The frontend workflow is already configured and running. It will automatically start when you open the Repl.

**To manually start the backend** (if needed):
```bash
cd backend
npm start
```

The backend will run on http://localhost:3001 and the frontend will connect to it automatically.

### Production Deployment
Deployment is configured to:
1. Build the frontend (`npm run build`)
2. Start both backend and frontend servers
3. Serve the React app from the backend in production mode

To deploy, click the "Publish" button in Replit.

## API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Create new account
- `POST /api/v1/auth/signin` - Login user
- `GET /api/v1/auth/me` - Get current user
- `PUT /api/v1/auth/me` - Update profile

### Posts
- `GET /api/v1/posts/allpost` - Get all posts (paginated)
- `POST /api/v1/posts/createpost` - Create new post
- `PUT /api/v1/posts/like` - Like/unlike post
- `PUT /api/v1/posts/comment` - Add comment

### Users
- `GET /api/v1/users/user/:id` - Get user profile
- `PUT /api/v1/users/follow` - Follow user
- `PUT /api/v1/users/unfollow` - Unfollow user
- `GET /api/v1/users/search-users` - Search users

### Chat
- `POST /api/v1/chat/request` - Send chat request
- `GET /api/v1/chat/chats` - Get user chats
- `GET /api/v1/chat/chat/:id/messages` - Get chat messages
- `POST /api/v1/chat/chat/:id/message` - Send message

### Notifications
- `GET /api/v1/notifications` - Get notifications
- `PUT /api/v1/notifications/mark-read` - Mark as read
- `GET /api/v1/notifications/unread-count` - Get unread count

## Troubleshooting

### Frontend not loading
- Check if the Frontend workflow is running
- Verify that port 5000 is not in use
- Check browser console for errors

### Backend connection errors
- The app can run without a database connection
- Backend runs on localhost:3001
- Frontend automatically detects the backend URL

### CORS errors
- CORS is configured to allow Replit domains
- Make sure both frontend and backend are running

### Image upload issues
- Verify Cloudinary credentials in Secrets
- Check that CLOUDINARY_* environment variables are set

## Technology Stack

**Frontend:**
- React.js 18.2
- React Router DOM 6.8
- Material-UI (MUI)
- Tailwind CSS + Bootstrap
- Socket.IO Client
- Framer Motion
- React Hot Toast

**Backend:**
- Node.js 20
- Express.js 4.18
- MongoDB + Mongoose
- Socket.IO 4.8
- JWT Authentication
- Cloudinary
- Security middleware (Helmet, CORS, Rate limiting)

## User Preferences
- Language: Filipino (Tagalog)
- Keep project structure and existing code conventions
- Run without database if not configured
