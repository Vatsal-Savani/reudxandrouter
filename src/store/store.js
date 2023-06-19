import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../components/slices/userSlice'

export default configureStore({
    reducer: {
        user: userReducer
    },
})