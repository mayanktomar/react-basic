import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
    name: 'users',
    initialState: [],
    reducers: {
        addUser: (state,action) => {
            let usersToAdd = action.payload;
            usersToAdd.map((user)=>{
                state.push(user);
            })
        }
    }
})

export const {addUser} = usersSlice.actions;

export default usersSlice.reducer;
