Redux online setup can be viewed for setup

## Redux

- Redux is used to manage shared frontend state.

- Instead of keeping important data inside individual components, Redux provides one central place to store and access that data.

- In this project, Redux is mainly used to store the currently logged-in user's data.

## store.js

- `store.js` creates the central Redux store.

- The store is like the main frontend storage for shared application state.

- `configureStore()` creates the Redux store.

- `user: userSlice` adds the `user` state section to the store.

- Current store structure:

  `store → user → userData`

## userSlice.js

- A slice manages one specific section of Redux state.

- `userSlice` manages the user's data.

- `createSlice()` creates the slice.

- `name: "user"` identifies the slice.

- `initialState` defines the starting state.

- `userData: null` means there is no user data available initially.

## reducers

- Reducers define how Redux state can be changed.

- `setUserData()` is the reducer used to update the user's data.

- `state` represents the current Redux state.

- `action` contains information about the requested state change.

- `action.payload` contains the actual data being sent.

- `state.userData = action.payload` stores the received user data in Redux.

## dispatch()

- `dispatch()` sends an action to Redux.

- Example:

  `dispatch(setUserData(result.data))`

- This means:

  `Send result.data → setUserData → Redux`

- The reducer then updates:

  `state.userData`

## main.jsx

- `Provider` connects React with Redux.

- `<Provider store={store}>` makes the Redux store available to the React application.

- Components inside `Provider` can access and update Redux state.

- `store` is imported from `store.js`.

## App.jsx

- `App.jsx` checks the currently logged-in user when the application starts.

- `useEffect()` runs the user-checking logic when the app loads.

- `useDispatch()` gives us the `dispatch()` function.

- Axios sends a request to:

  `/api/user/current-user`

- `{ withCredentials: true }` allows the browser's authentication cookie to be sent with the request.

- If the request succeeds:

  `dispatch(setUserData(result.data))`

- If the request fails:

  `dispatch(setUserData(null))`

## Redux Flow

1. React application starts.

2. `App.jsx` calls the current-user API.

3. Backend returns the user data.

4. `App.jsx` receives `result.data`.

5. `dispatch(setUserData(result.data))` sends the data to Redux.

6. `userSlice` handles the action.

7. `state.userData` is updated.

8. Other React components can access the user data from Redux.

## Redux Architecture

`main.jsx`
→ gives React access to Redux

`store.js`
→ creates the central Redux store

`userSlice.js`
→ manages the user state

`App.jsx`
→ gets user data from backend and dispatches it

## Redux vs MongoDB

- MongoDB stores permanent backend data.

- Redux stores the frontend's current/shared state.

- Redux does not replace MongoDB.

- Redux state can disappear when the page is refreshed unless persistence is implemented.

## IMPORTANT

`store.js` → Where Redux state is stored

`userSlice.js` → How user state is managed

`Provider` → Gives React access to Redux

`dispatch()` → Sends an action to Redux

`reducer` → Changes the Redux state

`App.jsx` → Gets backend data and puts it into Redux

## IMPORTANT FLOW

Backend API

→ `App.jsx`

→ `dispatch(setUserData(result.data))`

→ `userSlice`

→ Redux Store

→ React components

## Redux Pattern to Remember

`createSlice()`

→ Define `initialState`

→ Define `reducers`

→ Export actions

→ Add reducer to `store.js`

→ Wrap app with `Provider`

→ Use `dispatch()` to change state

→ Use Redux state inside components