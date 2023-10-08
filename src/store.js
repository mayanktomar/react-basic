import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from './redux/feedbackSlice';
import usersReducer from './redux/usersSlice';

export default configureStore({
    reducer:  {
        feedbacks: feedbackReducer,
        users: usersReducer
    }
});