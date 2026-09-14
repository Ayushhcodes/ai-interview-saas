# AI Interview SaaS - Development Notes

## Backend Setup

### 1. Created `.env`
Added environment variables for the backend:

- `PORT=8000`
- `MONGODB_URL` for the MongoDB Atlas connection

`.env` is used to keep configuration/secrets outside the main code.

### 2. Updated `server/index.js`
- Imported `express`
- Imported `dotenv`
- Imported the `connectDB` function
- Loaded environment variables using `dotenv.config()`
- Created the Express app
- Set the server port using `process.env.PORT`
- Created a test `/` GET route
- Started the server using `app.listen()`
- Called `connectDB()` when the server starts

### 3. Created `server/config/connectDB.js`
- Imported Mongoose
- Created an asynchronous `connectDB()` function
- Connected MongoDB using `mongoose.connect()`
- Added `try/catch` for database errors
- Exported `connectDB` so it can be used in `index.js`

### Current Result

- Backend server running successfully on port `8000`
- MongoDB connected successfully
- Basic `/` API route working

## Progress

- [x] Backend setup
- [x] Express server
- [x] Environment variables
- [x] MongoDB connection
- [ ] User Model