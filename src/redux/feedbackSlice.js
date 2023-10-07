import { createSlice } from "@reduxjs/toolkit";

export const feedbackSlice = createSlice({
    name: 'feedbacks',
    initialState: [{
        name: "User A",
        message: "This is feedback by user A"
    }],
    reducers: {
        addFeedback: (state,action) => {
            const feedbackToAdd = action.payload;
            state.push(feedbackToAdd);
        }
    }
})

export const {addFeedback} = feedbackSlice.actions;

export default feedbackSlice.reducer;