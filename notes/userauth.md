# 🔐 Authentication & User Flow

## 1. Auth Controller vs User Controller

### Auth Controller
Handles login and signup.

Responsibilities:
- Google login/signup
- Create or find user in MongoDB
- Generate JWT token
- Store JWT in cookies

Example:
POST /api/auth/google

Main question:
"Can this user log in?"

---

### User Controller
Handles information about an already logged-in user.

Responsibilities:
- Get current user
- Update user profile
- Manage user credits
- Fetch user information

Example:
GET /api/user/current-user

Main question:
"Which logged-in user is making this request?"

---

# 2. isAuth Middleware

## Purpose
Checks whether the user has a valid JWT token.

### Flow

Request
  ↓
Read token from cookies
  ↓
Check if token exists
  ↓
Verify JWT using JWT_SECRET
  ↓
Extract userId
  ↓
Store userId in req.userId
  ↓
next()
  ↓
Controller runs

### Important Code

req.userId = verifyToken.userId

next() allows the request to continue.

---

# 3. User Controller

## getCurrentUser()

### Purpose
Finds the logged-in user in MongoDB.

### Steps

1. Get userId from req.userId.
2. Search MongoDB using User.findById().
3. If user does not exist, return 404.
4. If found, return user data with status 200.

### Important Code

const userId = req.userId

const user = await User.findById(userId)

return res.status(200).json(user)

---

# 4. User Route

### Code

userRouter.get(
    "/current-user",
    isAuth,
    getCurrentUser
)

### Meaning

When a GET request reaches /current-user:

1. Run isAuth middleware.
2. Verify the JWT token.
3. If valid, run getCurrentUser.
4. Return the user's information.

---

# 5. Route Registration

In index.js:

app.use("/api/user", userRouter)

In user.route.js:

userRouter.get("/current-user", isAuth, getCurrentUser)

### Final URL

Base path:
 /api/user

Route path:
 /current-user

Complete path:
 /api/user/current-user

---

# 6. App.jsx Axios Request

const result = await axios.get(
    ServerUrl + "/api/user/current-user",
    {
        withCredentials: true
    }
)

### Meaning

- axios.get(): Sends a GET request.
- ServerUrl: Backend's base URL.
- /api/user/current-user: Backend route.
- withCredentials: true: Includes cookies.
- await: Waits for the response.
- result: Stores the response.

### Display Response

console.log(result.data)

result.data contains the data returned by the backend.

---

# 🔥 Complete Flow

App.jsx
  ↓
Axios GET request
  ↓
/api/user/current-user
  ↓
user.route.js
  ↓
isAuth middleware
  ↓
Verify JWT token
  ↓
Store userId in req.userId
  ↓
getCurrentUser controller
  ↓
Find user in MongoDB
  ↓
Return user data
  ↓
Frontend receives result.data

---

# 🧠 Quick Memory Trick

Auth Controller:
"Can the user log in?"

isAuth Middleware:
"Is the user authenticated?"

User Controller:
"Get information about the logged-in user."

User Route:
"Connect the URL to middleware and controller."