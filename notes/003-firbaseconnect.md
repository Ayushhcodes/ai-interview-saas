## Google Authentication

- `getAuth(app)` creates Firebase authentication.
- `GoogleAuthProvider()` sets up Google login.
- `auth` and `provider` are exported for use in other files.

## handleGoogleAuth()

- Runs when the Google login button is clicked.
- Opens a Google login popup.
- Stores the login response.
- `try...catch` handles errors.
- Logs the response or error in the console.

## Google Login Backend Flow

1. Frontend gets the user's name and email from Firebase.
2. Frontend sends the user data to the backend.
3. Backend checks whether the user already exists.
4. If the user is new, create a user in MongoDB.
5. Backend generates a JWT token.
6. Store the JWT token in the user's cookies.
7. Use the cookie to verify the user in future requests.

## IMPORTANT
Google Login → Firebase ID Token → Backend verifies token 
→ Gets verified user details → Creates/finds user
→ Generates JWT → Stores JWT in cookie