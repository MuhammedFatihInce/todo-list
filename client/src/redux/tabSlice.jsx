import { createSlice } from '@reduxjs/toolkit';

export const ALL_TODOS = 'All Todos';
export const ACTIVE_TODOS = 'Active Todos';
export const DONE_TODOS = 'Done Todos';
export const TABS = [ALL_TODOS, ACTIVE_TODOS, DONE_TODOS];

const tabSlice = createSlice({
    name: 'tab',
    initialState: ALL_TODOS,
    reducers: {
        toggleTab: (state, action) => action.payload
    }
});

export const { toggleTab } = tabSlice.actions;
export default tabSlice.reducer;
