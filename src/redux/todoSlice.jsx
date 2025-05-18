import { createSlice,nanoid } from '@reduxjs/toolkit';

const todoSlice=createSlice({
    name:'todo',
    initialState:[],
    reducers: {
        addTodo: {
            reducer: (state, action) => {
              state.push(action.payload);
            },
            prepare: (note) => ({
              payload: {
                id: nanoid(),
                note,
              },
            }),
          },
    }
})

export const { addTodo} =todoSlice.actions
export default todoSlice.reducer
