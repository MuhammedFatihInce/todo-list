import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './todosSlice';
import tabReducer from './tabSlice';

const store = configureStore({
    reducer: {
        todos: todosReducer,
        currentTab: tabReducer
    }
});

export default store;
