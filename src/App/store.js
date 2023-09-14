import { configureStore } from '@reduxjs/toolkit'
// import counterReducer from "../features/counter/counterSlice"
import postReducer from "../features/Post/postSlice"
import usersReducer from "../features/user/usersSlice"

 const store = configureStore({
    reducer: {
        // counter:counterReducer,
        posts:postReducer,
        users:usersReducer,
    },
  })


  export default store;