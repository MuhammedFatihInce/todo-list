import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

// Async actions
export const addNewTodo = createAsyncThunk('todos/addNewTodo', async (data) => {
    const response = await axios.post(`${API_URL}/todos`, { data });
    return response.data;
});

export const getAllTodos = createAsyncThunk('todos/getAllTodos', async () => {
    const response = await axios.get(`${API_URL}/todos`);
    return response.data;
});

export const toggleTodo = createAsyncThunk('todos/toggleTodo', async (id) => {
    const response = await axios.get(`${API_URL}/todos/${id}`);
    return response.data;
});

export const updateTodo = createAsyncThunk('todos/updateTodo', async ({ id, data }) => {
    const response = await axios.put(`${API_URL}/todos/${id}`, { data });
    return response.data;
});

export const deleteTodo = createAsyncThunk('todos/deleteTodo', async (id) => {
    const response = await axios.delete(`${API_URL}/todos/${id}`);
    return response.data;
});

// Slice
const todosSlice = createSlice({
    name: 'todos',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllTodos.fulfilled, (state, action) => {
                return action.payload;
            })
            .addCase(addNewTodo.fulfilled, (state, action) => {
                state.unshift(action.payload);
            })
            .addCase(toggleTodo.fulfilled, (state, action) => {
                const index = state.findIndex(todo => todo._id === action.payload._id);
                if (index !== -1) {
                    state[index].done = !state[index].done;
                }
            })
            .addCase(updateTodo.fulfilled, (state, action) => {
                const index = state.findIndex(todo => todo._id === action.payload._id);
                if (index !== -1) {
                    state[index].data = action.payload.data;
                }
            })
            .addCase(deleteTodo.fulfilled, (state, action) => {
                return state.filter(todo => todo._id !== action.payload);
            });
    }
});

export default todosSlice.reducer;
