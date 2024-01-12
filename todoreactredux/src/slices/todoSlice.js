import { createSlice, nanoid } from '@reduxjs/toolkit'

// Create a slice of state called todoSlice

const initialState = {
  todolist: [
    {
      id: 1,
      text: 'Hello World',
    },
  ],
}

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      }
      state.todolist.push(newTodo)
    },
    removeTodo: (state, action) => {
      state.todolist = state.todolist.filter(
        (todo) => todo.id !== action.payload
      )
    },
  },
})

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer
