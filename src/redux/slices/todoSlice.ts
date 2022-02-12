import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum TAG {
  HOME,
  WORK,
  SCHOOL,
}

export interface Task {
  id: string;
  title: string;
  description?: string;
  tag: TAG;
  done: boolean;
  creationDate: string;
}

interface TodoSlice {
  tasks: Task[];
  currentTag: TAG;
}

const initialState: TodoSlice = {
  tasks: [
    {
      id: "f32",
      title: "reading book",
      description: "i am reading a book",
      tag: TAG.HOME,
      done: false,
      creationDate: "2000-01-01T06:01:02Z",
    },
    {
      id: "aa32",
      title: "swimming",
      tag: TAG.SCHOOL,
      done: true,
      creationDate: "2000-04-01T18:01:02Z",
    },
    {
      id: "a32",
      title: "playing soccer",
      tag: TAG.WORK,
      done: false,
      creationDate: "2020-01-01T13:01:02Z",
    },
  ],
  currentTag: TAG.HOME,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
  },
});

export const { addTask } = todoSlice.actions;
export default todoSlice.reducer;
