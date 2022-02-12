import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum TAG {
  ALL,
  HOME,
  WORK,
  SCHOOL,
}

export interface Task {
  id: string
  title: string
  description?: string
  tag: TAG
  done: boolean
  creationDate: string
}

interface TodoSlice {
  tasks: Task[]
  currentTag: TAG
}

const initialState: TodoSlice = {
  tasks: [
    {
      id: 'f32',
      title: 'reading book',
      description: 'i am reading a book',
      tag: TAG.HOME,
      done: false,
      creationDate: '2022-02-10T06:01:02Z',
    },
    {
      id: 'aa32',
      title: 'swimming',
      tag: TAG.SCHOOL,
      done: true,
      creationDate: '2022-02-10T18:01:02Z',
    },
    {
      id: 'a32',
      title: 'playing soccer',
      tag: TAG.WORK,
      done: false,
      creationDate: '2022-02-10T13:01:02Z',
    },
  ],
  currentTag: TAG.ALL,
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.unshift(action.payload)
    },
    deleteTask: (state, action: PayloadAction<Task['id']>) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload)
      state.tasks.splice(index, 1)
    },
    toggleCompleted: (state, action: PayloadAction<Task['id']>) => {
      const foundTask = state.tasks.find((task) => task.id === action.payload)
      if (foundTask) {
        foundTask.done = !foundTask.done
      }
    },
    changeCurrentTag: (state, action: PayloadAction<TAG>) => {
      state.currentTag = action.payload
    },
  },
})

export const { addTask, deleteTask, toggleCompleted, changeCurrentTag } = todoSlice.actions
export default todoSlice.reducer
