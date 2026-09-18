## Backend Structure

### `server/`
The `server` folder contains the backend of our application.

### `config/`
Contains configuration-related files. settings that control how your app connects to external tools, databases, and AI models.

- `connectDB.js` → connects our backend to MongoDB.

### `controllers/`
Will contain the logic for handling API requests. The Interview Controller takes over. It talks to the database, asks OpenAI to generate a question, and packages up the response to send back to the user's screen.


### `middlewares/`
Will contain functions that run between the request and controller.  This folder contains security guards and filters that intercept a request before it reaches your controllers

Later used for things like authentication.

Currently empty.

### `models/`
Contains the structure of data stored in MongoDB.

- `user.model.js` → defines the structure of a User and creates the User model.


### `routes/`
Will contain our API routes/endpoints.A candidate clicks a button, sending a request to /api/start-interview. The route file looks at this URL and says: "Okay, I need to pass this request over to the Interview Controller."



### `.env`
Stores configuration and secret values.

Currently:
- `PORT`
- `MONGODB_URL`

### `index.js`
Main entry point of the backend.

Currently:
- Creates Express server
- Defines `GET /`
- Starts server
- Connects to MongoDB


## Current Flow

[ User Request ] 
       │
       ▼
 1. ROUTES ────► (The server looks at the URL path basically route tell when this action in frontend happens send to which controller am i right)
       │
       ▼
 2. MIDDLEWARES ──► (The security guard checks: Is the user logged in?)
       │
       ▼
 3. CONTROLLERS ──► (The brain does the heavy work / talks to AI)
 
Controller contains the actual logic of an action.

Google Login Controller:
- Gets user data from frontend.
- Checks or creates the user in MongoDB.
- Generates JWT token.
- Stores token in cookies.
- Sends response to frontend.
