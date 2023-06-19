import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        userList: "https://images.dog.ceo/breeds/terrier-welsh/lucy.jpg",
    },
    reducers: {
        getUsers: (state, action) => {
            state.userList = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { getUsers } = userSlice.actions

export default userSlice.reducer