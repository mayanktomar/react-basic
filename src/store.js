import { configureStore } from "@reduxjs/toolkit";
import feedbackReducer from './redux/feedbackSlice';

export default configureStore({
    reducer:  {
        feedbacks: feedbackReducer
    }
});