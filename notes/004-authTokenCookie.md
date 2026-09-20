## App.jsx

- Main entry component of the React frontend.
- Uses `Routes` and `Route` from `react-router-dom` to manage page navigation.
- Each `Route` connects a URL path to a React component.
- `/` renders the `Home` component.
- `/auth` renders the `Auth` component.
- `ServerUrl` stores the backend server's base URL.
- Other frontend files can import `ServerUrl` to send API requests.

### Important Insight

- `App.jsx` manages frontend navigation, not backend logic.
- `ServerUrl` is just a URL stored in a variable. It is used when the frontend needs to communicate with the backend.

Frontend → `ServerUrl` → Backend API


## index.js

- Main entry point of the Express backend.
- Creates the Express application using `express()`.
- Loads environment variables using `dotenv.config()`.
- Imports the database connection function.
- Imports authentication routes from `auth.route.js`.

### Middleware

- `cors()` allows the frontend and backend to communicate.
- `origin` specifies the frontend URL allowed to make requests.
- `credentials: true` allows cookies to be sent and received in cross-origin requests.
- `express.json()` reads JSON data from incoming request bodies.
- The data becomes available through `req.body`.
- `cookieParser()` reads cookies sent by the browser.
- Cookies become available through `req.cookies`.

### Routes

- `app.use("/api/auth", authRouter)` connects authentication routes to the backend.
- `/api/auth` becomes the common prefix for authentication endpoints.
- Example: `/signup` inside the router becomes `/api/auth/signup`.

### Server

- `process.env.PORT || 5000` uses the environment port or defaults to `5000`.
- `app.listen()` starts the Express server.
- `connectDB()` connects the backend to MongoDB.

### Important Insight

- `index.js` connects all the major backend parts.
- It configures middleware, registers routes, and starts the server.
- It usually does not contain the detailed signup/login logic.


## auth.route.js

- Contains authentication-related API routes.
- Imports controller functions from `auth.controller.js`.
- Connects HTTP methods and URL paths to controller functions.
- Keeps route definitions separate from the actual business logic.

### Important Insight

- The route file decides **which controller function should run**.
- It does not usually contain the complete authentication process.

### Request Flow

Request → Route → Controller

Example:

`POST /api/auth/signup`
→ Signup route
→ Signup controller function


## auth.controller.js

- Contains the main logic behind authentication operations.
- Controller functions are called by the routes.
- Handles tasks such as signup, login, and logout, depending on the functions defined in the file.
- Can receive request data through `req.body`.
- Can read authentication cookies through `req.cookies`.
- Can interact with MongoDB to find or create users.
- Can generate JWT tokens and set cookies when authentication is implemented.
- Sends a response back to the frontend.

### Important Insight

- The controller performs the actual work.
- Routes decide where the request goes.
- Controllers process the request and return a response.

### Request Flow

Frontend request
→ `index.js`
→ `auth.route.js`
→ `auth.controller.js`
→ MongoDB (if required)
→ Response to frontend


## Overall Backend Structure

Frontend (`App.jsx`)
→ Sends API request
→ Backend (`index.js`)
→ Authentication route (`auth.route.js`)
→ Authentication controller (`auth.controller.js`)
→ Database
→ Response to frontend


## Quick Revision

- `App.jsx` → Controls frontend pages and navigation.
- `index.js` → Configures and starts the backend.
- `auth.route.js` → Connects API endpoints to controller functions.
- `auth.controller.js` → Contains the actual authentication logic.
- `express.json()` → Reads JSON request body.
- `cookieParser()` → Reads browser cookies.
- `ServerUrl` → Backend URL used by the frontend.
- `credentials: true` → Enables cookie-based cross-origin requests.